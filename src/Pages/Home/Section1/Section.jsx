import { Carousel } from "react-responsive-carousel";

const Section1 = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
    >
      <div className="ps-4 pe-4">
        <img
          src="https://static.vecteezy.com/system/resources/previews/028/576/300/non_2x/cocktails-in-the-bar-on-a-dark-background-closeup-alcoholic-cocktails-set-strong-drinks-and-aperitifs-ai-generated-free-photo.jpg"
          className="image-container"
          loading="lazy"
        />
      </div>
      <div className="ps-4 pe-4">
        <img
          src="https://v-zug-lifestyle.imgix.net/wp-content/uploads/sites/2/2021/03/V-Zug-Schofields-8.jpg?auto=format%2Ccompress&w=1024&h=1024"
          className="image-container"
          loading="lazy"
        />
      </div>
      <div className="ps-4 pe-4">
        <img
          src="https://img.freepik.com/premium-photo/cocktails-week-are-best-drinks_662214-12924.jpg"
          className="image-container"
          loading="lazy"
        />
      </div>
      <div className="ps-4 pe-4">
        <img
          src="https://img.freepik.com/free-photo/blend-cocktails-glasses-with-orange-fruit_23-2149384389.jpg"
          className="image-container"
          loading="lazy"
        />
      </div>
      <div className="ps-4 pe-4">
        <img
          src="https://drymartiniorg.com/wp-content/uploads/2015/11/Los_origenes_del_vodka_Dry_Martini_JAvier_de_las_Muelas.jpg"
          className="image-container"
          loading="lazy"
        />
      </div>
    </Carousel>
  );
};
export default Section1;
