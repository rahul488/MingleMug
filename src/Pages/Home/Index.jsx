import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import useToggle from "../../hooks/useToggle";
import Main from "../../Components/Main/Main";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Index.css";
import Footer from "../../Components/Footer/Footer";
import ScrollToTopButton from "../../Components/Scroll/ScrollTotop";

const Index = () => {
  const { toggle, handleToggle } = useToggle(false);

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header open={handleToggle} />
      <Sidebar open={toggle} close={handleToggle} />
      <div className="socal-connect d-flex flex-column gap-2 bg-dark">
        <FaFacebook
          size="40"
          color="orangered"
          onClick={() => window.open("https://www.facebook.com/", "_blank")}
        />
        <FaInstagramSquare
          size="40"
          color="orangered"
          onClick={() =>
            window.open("https://www.instagram.com/rahul_das_here/", "_blank")
          }
        />
        <FaSquareXTwitter
          size="40"
          color="orangered"
          onClick={() => window.open("https://twitter.com/", "_blank")}
        />
      </div>
      <Main />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};
export default Index;
