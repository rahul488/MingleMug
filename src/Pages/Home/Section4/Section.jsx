import { Button } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router";
const Section4 = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-between fresh-testy-section-wrapper">
      <div className="d-flex flex-column left-section">
        <div>
          <h6 style={{ color: "#B85E0EC9", fontWeight: "bold" }}>
            {" "}
            FRESH & TASTY
          </h6>
          <h3>Our Signature Cocktails</h3>
        </div>
        <div>
          <h6 style={{ lineHeight: "20px" }} className="text-white-50">
            Indulge in the extraordinary with our distinguished array of
            signature cocktails, where each libation is a testament to the
            artistry and innovation that defines our mixology. From the first
            sip to the last, our curated collection invites you to experience a
            symphony of flavors meticulously crafted by our expert mixologists.
            Uncover the allure of the 'Mystic Mule' with its intriguing blend of
            herbs and spices or revel in the sophistication of the 'Royal
            Velvet,' a harmonious fusion of premium spirits. Each signature
            cocktail is more than a drink; it's a sensorial journey that
            captures the spirit of our establishment. Elevate your evenings with
            these bespoke creations, thoughtfully designed to tantalize your
            taste buds and leave an enduring impression. Cheers to the
            extraordinary, where every signature cocktail is a work of art
            waiting to be savored.
          </h6>
        </div>
        <div>
          <Button
            className="btn btn-dark p-2"
            onClick={() => navigate("/menu")}
          >
            Explore Our Menu
          </Button>
        </div>
      </div>
      <div className="right-section">
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={true}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
        >
          <div className="ps-4 pe-4">
            <img
              src="https://bar.ingridtemplates.com/wp-content/uploads/sites/22/2021/06/coldice.png"
              className="cr-img2"
            />
          </div>
          <div className="ps-4 pe-4">
            <img
              src="https://bar.ingridtemplates.com/wp-content/uploads/sites/22/2021/06/sweet2-1.png"
              className="cr-img2"
            />
          </div>
          <div className="ps-4 pe-4">
            <img
              src="https://bar.ingridtemplates.com/wp-content/uploads/sites/22/2021/06/drink2-1.png"
              className="cr-img2"
            />
          </div>
          <div className="ps-4 pe-4">
            <img
              src="https://img.freepik.com/premium-photo/girl-drinks-delicious-sweet-cocktail-looks-into-phone-amazing-relaxing-day_627378-623.jpg"
              className="cr-img2"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Section4;
