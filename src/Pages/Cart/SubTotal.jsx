import { useEffect, useState } from "react";

const SubTotal = ({ product }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    product.map((prod) => {
      total += prod.quantity * prod.price;
    });
    setTotal(total);
  }, [product]);
  return (
    <div>
      <h6 className="total text-center">Total</h6>
      <h6>Total Item Price:  <span className="price">${total}</span></h6>
      <h6>Extra:  <span className="price">${20}</span></h6>
      <h6 className="subTotal mt-4">SubTotal:  <span className="price">${20+total}</span></h6>
    </div>
  );
};
export default SubTotal;
