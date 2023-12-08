import { Card } from "reactstrap";

const Section6 = () => {
  return (
    <div className="d-flex justify-content-between fix-padding w-100 gap-5 flexWrap w-100">
      <div className="py-md-5 left-section">
        <h4> Attention to Details</h4>
        <br />
        <h6 className="text-white-50">
          Step into MingleMug and let our commitment to detail elevate your
          evening. Our mixologists, dedicated to the art of crafting exceptional
          cocktails, meticulously select premium ingredients, blending flavors
          with precision. From the stylish presentation to the attentive
          service, every detail is thoughtfully curated to create a harmonious
          experience. Whether you're indulging in a signature creation or a
          classic favorite, our devotion to perfection ensures that every visit
          is a celebration of the extraordinary. Cheers to the finer things in
          life, where every detail matters.
        </h6>
        <br />
        <br />
        <ul>
          <li className="text-white-50">
            Immerse yourself in a world of flavor at MingleMug, where each
            cocktail tells a story of craftsmanship and innovation.
          </li>
          <br />
          <li className="text-white-50">
            From the first sip to the last, our attention to detail ensures an
            unparalleled experience, where every element is a testament to
            perfection.
          </li>
          <br />
          <li className="text-white-50">
            At Minglemug, precision meets passion, offering a haven for those
            who appreciate the finer nuances of mixology.
          </li>
        </ul>
      </div>
      <div className="w-100 right-section">
        <Card className="bg-black">
          <img
            alt="maker"
            src="https://bar.ingridtemplates.com/wp-content/uploads/sites/22/elementor/thumbs/barman-makes-cosmopolitan-cocktail-e1624969087847-p9dnlhejzpghz2m24urk64i0dwuwe39cfp9x7qps2g.jpg"
            className="cr-img"
          />
        </Card>
      </div>
    </div>
  );
};
export default Section6;
