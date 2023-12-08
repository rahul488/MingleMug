import { useEffect, useRef } from "react";
import {
  CardGroup,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
  CardText,
} from "reactstrap";
import InfinitySpinner from "../../../Components/Spinner/InfinitySpinner";
import useCartStore from "../../../hooks/Strore/Store";
import { toast } from "react-toastify";
const ProductCard = ({ products, handlePage, showMore }) => {
  const ref = useRef();
  const addtoCart = useCartStore((state) => state.increaseCartCount);
  useEffect(() => {
    const productListObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            handlePage();
          }
        });
      },
      { threshold: 1 }
    );

    if (ref.current) {
      productListObserver.observe(ref.current);
    }

    return () => {
      productListObserver.disconnect();
    };
  }, []);
  const handleCart = (product) => {
    addtoCart(product)
      .then((res) => {
        toast.success(res, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
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
  return (
    <div className="p-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products?.map((prod) => (
          <div className="col" key={prod.idDrink || prod?.idMeal}>
            <Card className="text-bg-dark">
              <CardImg
                alt="Card image cap"
                src={prod?.strDrinkThumb || prod?.strMealThumb}
                top
                width="100%"
              />
              <CardBody>
                <div className="d-flex justify-content-between flex-wrap align-items-center">
                  <CardTitle tag="h5">
                    {prod?.strDrink || prod?.strMeal}
                  </CardTitle>
                  <Button
                    className="btn bg-success p-2"
                    onClick={() => handleCart(prod)}
                  >
                    Add to cart
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      <div ref={ref}></div>
      {showMore && <InfinitySpinner />}
    </div>
  );
};
export default ProductCard;
