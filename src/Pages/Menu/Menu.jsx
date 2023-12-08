import "./Menu.css";
import Section1 from "./Section1/Section";
import Section2 from "./Section2/Section";
import Section3 from "./Section3/Section";
import Section4 from "./Section4/Section";

const Menu = () => {
  return (
    <div className="d-flex flex-column gap-5 p-4">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};
export default Menu;
