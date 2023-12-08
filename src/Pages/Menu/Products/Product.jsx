import { useCallback, useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import ProductCard from "./ProductCard";
import InfinitySpinner from "../../../Components/Spinner/InfinitySpinner";
import { useParams } from "react-router";

const Product = () => {
  const { type } = useParams();
  if (type === "Cocktail") {
    return <CocktailList />;
  } else if (type === "Wines") {
    return <WineList />;
  } else if (type === "Bites") {
    return <BiteList />;
  }
};
export default Product;

const CocktailList = () => {
  const { data, loading } = useAxios(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  );

  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    if (data) {
      let slicedProducts = [];
      if (page == 0) {
        slicedProducts = data.drinks.slice(0, 10);
      } else {
        slicedProducts = data.drinks.slice(page*10, (page+1) * 10);
      }
      setProducts([...products, ...slicedProducts]);
      setShowMore(false);
    }
  }, [data, page]);
  const handlePage = () => {
    setShowMore(true);
    setPage((prev) => prev + 1);
  };
  return loading? (
    <InfinitySpinner />
  ) : (
    <ProductCard
      products={products}
      data={data}
      page={page}
      handlePage={handlePage}
      showMore={showMore}
    />
  );
};
const WineList = () => {
  const { data, loading } = useAxios(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  );

  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    if (products.length == data?.length) {
      return;
    }
    if (data) {
      let slicedProducts = [];
      if (page == 0) {
        slicedProducts = data.drinks.slice(0, 10);
      } else {
        slicedProducts = data.drinks.slice(page * 10, page * 10 + 10);
      }
      setProducts([...products, ...slicedProducts]);
      setShowMore(false);
    }
  }, [data, page]);
  const handlePage = () => {
    setShowMore(true);
    setPage((prev) => prev + 1);
  };
  return loading ? (
    <InfinitySpinner />
  ) : (
    <ProductCard
      products={products}
      handlePage={handlePage}
      showMore={showMore}
    />
  );
};
const BiteList = () => {
  const { data, loading } = useAxios(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
  );

  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    if (products.length == data?.length) {
      return;
    }
    if (data) {
      let slicedProducts = [];
      if (page == 0) {
        slicedProducts = data.meals.slice(0, 10);
      } else {
        slicedProducts = data.meals.slice(page * 10, page * 10 + 10);
      }
      setProducts([...products, ...slicedProducts]);
      setShowMore(false);
    }
  }, [data, page]);
  const handlePage = () => {
    setShowMore(true);
    setPage((prev) => prev + 1);
  };
  return loading ? (
    <InfinitySpinner />
  ) : (
    <ProductCard
      products={products}
      handlePage={handlePage}
      showMore={showMore}
    />
  );
};
