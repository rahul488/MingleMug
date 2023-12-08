import { useNavigate } from "react-router";
import { Card } from "reactstrap";
const Section3 = () => {
  const navigate = useNavigate();
  const handleClick = (type) => {
    navigate(`/menu/${type}`);
  };
  return (
    <div className="d-flex justify-content-evenly flex-wrap gap-3 w-100">
      <div
        className="cocktails-card"
        onClick={() => handleClick("Cocktail")}
      ></div>
      <div className="wine-card" onClick={() => handleClick("Wines")}></div>
      <div className="bites-card" onClick={() => handleClick("Bites")}></div>
    </div>
  );
};
export default Section3;
