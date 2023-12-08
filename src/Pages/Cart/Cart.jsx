import { Button } from "reactstrap";
import useCartStore from "../../hooks/Strore/Store";
import QuantityMachine from "./CartCounter";
import "./Cart.css";
import SubTotal from "./SubTotal";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Cart = () => {
  const prodcut = useCartStore((state) => state.product);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const navigate = useNavigate();
  const removeProduct = (prod) => {
    removeFromCart(prod)
      .then((res) =>
        toast.success(res, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      )
      .catch((err) => {
        toast.error(err, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return prodcut.length ? (
    <div className="container">
      {prodcut?.map((prod) => (
        <div className="row" key={prod.idDrink || prod?.idMeal}>
          <div className="col-sm-12 col-md-4">
            <img
              src={prod?.strDrinkThumb || prod?.strMealThumb}
              height="300px"
              width="100%"
            />
            <div className="d-flex justify-content-between flex-wrap align-items-center gap-3 p-2">
              <h5>{prod?.strDrink || prod?.strMeal}</h5>
              <Button
                className="btn bg-danger p-2"
                onClick={() => removeProduct(prod)}
              >
                Remove
              </Button>
            </div>
            <p className="p-2">${prod?.price}</p>
          </div>
          <div className="col-sm-12 col-md-4">
            <QuantityMachine product={prod} />
          </div>
          <div className="col-sm-12 col-md-4">
            <p className="text-center  py-4">${prod?.quantity * prod?.price}</p>
          </div>
        </div>
      ))}
      <div className="d-flex w-100 justify-content-end">
        <SubTotal product={prodcut} />
      </div>
      <div className="book-table w-100 d-flex justify-content-center pb-5">
        <Button
          className="btn btn-success p-2"
          onClick={() => navigate("/book-table")}
        >
          Book Table With PreOrder
        </Button>
      </div>
    </div>
  ) : (
    <div className="d-flex flex-column justify-content-center align-items-center empty-cart-wrapper">
      <MdOutlineRemoveShoppingCart size="2xl" color="red" />
      <h3 className="text-center">Your Cart Is Empty</h3>
    </div>
  );
};
export default Cart;
