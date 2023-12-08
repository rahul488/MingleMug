import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Button } from "reactstrap";
import useCartStore from "../../hooks/Strore/Store";

const QuantityMachine = ({ product }) => {
  const [count, setCount] = useState(product?.quantity);
  const increaseCartCount = useCartStore((state) => state.increaseCartCount);
  const decreaseCartCount = useCartStore((state) => state.decreaseCartCount);

  const handleCount = (type) => {
    if (count == 1 && type != "INC") {
      return;
    }
    if (type === "INC") {
      setCount((prev) => prev + 1);
      increaseCartCount(product);
    } else {
      setCount(count - 1);
      decreaseCartCount(product);
    }
  };
  return (
    <div className="d-flex gap-2 justify-content-center py-4">
      <Button className="btn btn-warning" onClick={() => handleCount("INC")}>
        <FaPlus size={20} />
      </Button>
      <h6 className="m-3">{count}</h6>
      <Button className="btn btn-success" onClick={() => handleCount("DEC")}>
        <FaMinus size={20} />
      </Button>
    </div>
  );
};
export default QuantityMachine;
