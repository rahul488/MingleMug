import { Card } from "reactstrap";

const Section7 = () => {
  return (
    <div className="d-flex justify-content-between fix-padding w-100 gap-5 flexWrap w-100">
      <div className="left-section w-100">
        <Card className="bg-black">
          <img
            alt="maker"
            src="https://bar.ingridtemplates.com/wp-content/uploads/sites/22/elementor/thumbs/close-up-profile-of-glamorous-blonde-girl-enjoying-fresh-fruit-drink-sitting-at-bar-counter-next-to-p9dfwtkof6q8qwh9n9ko9xttz4hmt8xiecp03sxbh4.jpg"
            className="cr-img"
          />
        </Card>
      </div>
      <div className="right-section fixed-margin">
        <h6
          className="mt-md-5"
          style={{ color: "#B85E0EC9", fontWeight: "bold" }}
        >
          OUR COCKTAILS
        </h6>
        <br />
        <h4>Fresh & Colorful</h4>
        <br />
        <p className="text-white-50 line-height">
          Sip on the lively and refreshing blends crafted to infuse your evening
          with a palette of flavors and hues.
        </p>
        <br />
        <p className="text-white-50 line-height">
          Dive into a world of freshness and color at MingleMug, where our
          cocktails are a sensory explosion of vibrant flavors. Our mixologists
          masterfully blend fresh, seasonal ingredients, creating a palette of
          colors that mirror the lively atmosphere of our establishment. From
          the zesty citrus notes to the rich hues of berries, each sip is a
          journey through a spectrum of taste experiences. Whether you're a fan
          of tropical infusions or herbaceous concoctions, our commitment to
          freshness ensures a colorful and invigorating cocktail adventure. Join
          us and let your taste buds dance in a symphony of freshness and
          vibrant joy.
        </p>
      </div>
    </div>
  );
};
export default Section7;
