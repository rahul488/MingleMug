import "./Home.css";

import Section1 from "./Section1/Section";
import Section2 from "./Section2/Section";
import Section3 from "./Section3/Section";
import Section4 from "./Section4/Section";
import Section5 from "./Section5/Section";
import Section6 from "./Section6/Section";
import Section7 from "./Section7/Section";

const Home = () => {
  return (
    <div className="py-5 home-wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
};
export default Home;
