import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import BsCarousel from "../../../Components/Carousel/Index";

const review = [
  {
    primaryText:
      "What an absolute delight! Our evening at MingleMug was nothing short of magical. The ambiance, the attentive staff, and, of course, the cocktails were beyond exceptional. Each sip felt like a symphony of flavors, a testament to the craftsmanship of the mixologists. The signature cocktails, in particular, were a highlight — innovative, perfectly balanced, and served with flair. The attention to detail in both presentation and taste was truly impressive. This establishment has elevated the art of mixology to new heights.",
    secondarytext: "John Doe",
    optionaltext: "Reviewer",
  },
  {
    primaryText:
      "A hidden gem for cocktail enthusiasts! MingleMug surpassed all expectations. From the moment we stepped in, the warm and inviting atmosphere set the stage for an unforgettable evening. The knowledgeable and friendly staff guided us through an impressive array of signature cocktails, each one a masterpiece in its own right. The 'Mystic Mule' and 'Sunset Bliss' were personal favorites, showcasing the creativity and dedication of the mixology team. If you're seeking a place where passion for cocktails meets unparalleled hospitality, look no further. Our night was filled with laughter, great company, and, of course, extraordinary drinks.",
    secondarytext: "Axlex Prod",
    optionaltext: "Reviewer",
  },
  {
    primaryText:
      "Exceptional experience from start to finish! MingleMugis a true gem in the world of mixology. The diverse range of cocktails, from classic concoctions to innovative signatures, ensures there's something for every palate. What sets this place apart is not just the quality of the drinks but the passion and expertise of the mixologists. The attention to detail, the use of premium ingredients, and the exquisite presentation make each cocktail a work of art. We left with a newfound appreciation for the craft and a desire to return for more delightful evenings.",
    secondarytext: "Ramesh Row",
    optionaltext: "Reviewer",
  },
  {
    primaryText:
      "When you taste their cocktails, that's when you know you've just had a cocktail crafted by a master mixologist!",
    secondarytext: "Ram",
    optionaltext: "Reviewer",
  },
];

const Section5 = () => {
  return (
    <div className="w-100">
      <div className="fix-padding">
        <div className="upper-quote">
          <FaQuoteLeft color="orange" />
        </div>
        <div className="review-content-wrapper">
          <BsCarousel data={review} />
        </div>
        <div className="down-quote">
          <FaQuoteRight color="orange" className="float-end" />
        </div>
      </div>
    </div>
  );
};
export default Section5;
