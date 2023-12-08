import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

const useAxios = (url, config = {}, type = "GET", payload = {}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const abortRef = useRef();

  useEffect(() => {
    if (url) {
      checkRequestType(url, type, payload, config);
    }
    return () => {
      if (abortRef.current) {
        abortRef.current.abort("Request cancelled automatically.");
      }
    };
  }, [url]);

  const checkRequestType = (url, type, payload = {}, conf) => {
    let config = {};
    if (Object.keys(payload).length) {
      config["data"] = payload;
    }
    if (Object.keys(conf).length) {
      config["headers"] = conf.headers;
    }
    if (type === "GET") {
      makeRequest(url, "get", config);
    } else if (type === "POST") {
      makeRequest(url, "post", config);
    } else if (type === "PUT") {
      makeRequest(url, "put", config);
    } else if (type === "DELETE") {
      makeRequest(url, "delete", payload);
    }
  };

  const makeRequest = async (url, type = "GET", config) => {
    try {
      if (abortRef?.current) {
        abortRef?.current.abort("Request cancelled.");
      }
      abortRef.current = new AbortController();

      config["signal"] = abortRef.current?.signal;
      setLoading(true);
      const res = await axios[type](url, config);
      setLoading(false);
      setData(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const get = (url, config) => checkRequestType(url, "GET", {}, config);
  const put = (url, payload, config) =>
    checkRequestType(url, "PUT", payload, config);
  const post = (url, payload, config) =>
    checkRequestType(url, "POST", payload, config);
  const del = (url, payload, config) =>
    checkRequestType(url, "DELETE", payload, config);

  return { get, put, post, del, loading, data };
};

export default useAxios;
