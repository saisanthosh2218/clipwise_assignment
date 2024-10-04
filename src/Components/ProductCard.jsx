/* eslint-disable react/prop-types */
import "../CSS Styles/productCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div>
        {" "}
        <img src={product.image.logo} alt={product.name} />
      </div>
      <div>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
