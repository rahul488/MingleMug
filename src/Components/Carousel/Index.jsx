import { Carousel } from "react-responsive-carousel";

function BsCarousel({ data }) {
  return (
    <div className="w-100">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {data.map((res, i) => (
          <div className="ps-4 pe-4 " key={i}>
            <h3 className="text-white-50">{res?.primaryText}</h3>
            <p className="text-white">{res?.secondarytext}</p>
            <h5 className="text-center text-white">{res?.optionaltext}</h5>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default BsCarousel;
