import productImage from "../assets/react.svg";
import "../CSS Styles/bestPrice.css";
const BestPrice = () => {
  return (
    <>
      <div className="product-showcase">
        <div className="text-content">
          <h3 className="best-price">BEST PRICE</h3>
          <h1 className="product-title">Agate Phone Grip</h1>
          <div className="price-section">
            <span className="old-price">44.50$</span>
            <span className="new-price">19.50$</span>
          </div>
          <p className="description">
            These Pop Rock Crystal grip tops can be swapped with other tops
            depending on your mood, outfit, nails, phone case, holiday, etc.!
            Just gently squeeze the sides to remove and swap out with another
            color or design!
          </p>
          <button className="buy-now-btnn">BUY NOW</button>
        </div>
        <div className="product-image">
          <div className="outer-circle"></div>
          <div className="inner-circle"></div>
          <div className="inner-circle-2"></div>
          <div className="inner-circle-3"></div>
          <div className="wave-circle">
            <img src={productImage} alt="Agate Phone Grip" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestPrice;
