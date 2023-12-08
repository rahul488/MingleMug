import React from "react";

import { useController } from "react-hook-form";
import { Input } from "reactstrap";

const InputField = ({ name, ...props }) => {
  const { field, fieldState } = useController({ name, defaultValue: "" });
  const { error } = fieldState;

  const { required, ...rest } = props;

  const config = {
    id: `text_input_${name}`,
    key: `text_input_key-${name}`,
    type: props.type,
    ...field,
    ...rest,
  };

  return (
    <div className="mt-3">
      <Input {...config} />
      {error?.message ? (
        <span id={`${name}_danger_text`} className="text-danger">
          <strong>{error.message}</strong>
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputField;
