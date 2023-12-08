import { BitesPrice, Cocktailprice, WinePrice } from "../../../Util/Menu/PriceList";

const Section4 = () => {
  return (
    <div className="w-100">
      <div className="menus-wrapper cocktails-list d-flex flex-column gap-2 w-100 align-items-center">
        <p className="sub-header">FRUITY OR SOUR</p>
        <p className="header1 text-center">Fresh Cocktails</p>
        <div className="d-flex justify-content-evenly gap-3 flex-wrap">
          <div>
            {Cocktailprice.left.map((item, index) => (
              <div className="d-flex flex-column gap-2 p-3" key={item.id}>
                <div className="d-flex justify-content-between">
                  <p className="price-list-title">{item.title}</p>
                  <p className="price-list-title">${item.price}</p>
                </div>
                <p className="price-list-desc">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div>
            {Cocktailprice.right.map((item, index) => (
              <div className="d-flex flex-column gap-2 p-3" key={item.id}>
                <div className="d-flex justify-content-between">
                  <p className="price-list-title">{item.title}</p>
                  <p className="price-list-title">${item.price}</p>
                </div>
                <p className="price-list-desc">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="menus-wrapper wine-list d-flex flex-column gap-2 w-100 align-items-center">
        <p className="sub-header text-center">BOTTLES</p>
        <p className="header1 text-center">Wine List</p>
        <div className="d-flex justify-content-evenly gap-3 flex-wrap">
          <div>
            {WinePrice.left.map((item) => (
              <div className="d-flex flex-column gap-2 p-3"  key={item.id}>
                <div className="d-flex justify-content-between">
                  <p className="price-list-title">{item.title}</p>
                  <p className="price-list-title">${item.price}</p>
                </div>
                <p className="price-list-desc">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div>
            {WinePrice.right.map((item) => (
              <div className="d-flex flex-column gap-2 p-3" key={item.id}>
                <div className="d-flex justify-content-between">
                  <p className="price-list-title">{item.title}</p>
                  <p className="price-list-title">${item.price}</p>
                </div>
                <p className="price-list-desc">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="menus-wrapper bites-list d-flex flex-column gap-2 w-100 align-items-center">
        <p className="sub-header text-center">Snacks</p>
        <p className="header1 text-center">Bites</p>
        <div className="d-flex justify-content-evenly gap-3 flex-wrap">
          <div>
            {BitesPrice.left.map((item, index) => (
              <div className="d-flex flex-column gap-2 p-3" key={item.id}>
                <div className="d-flex justify-content-between">
                  <p className="price-list-title">{item.title}</p>
                  <p className="price-list-title">${item.price}</p>
                </div>
                <p className="price-list-desc">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section4;
