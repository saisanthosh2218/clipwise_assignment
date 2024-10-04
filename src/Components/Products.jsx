import "../CSS Styles/products.css";
import ProductCard from "./ProductCard";
import logo from "../assets/react.svg";
import FilterSort from "./FilterSort";

const products = [
  {
    id: 1,
    name: "Crystal Agate Phone Grip",
    price: 18.99,
    image: { logo },
  },
  {
    id: 2,
    name: "Crystal Agate Phone Grip",
    price: 18.99,
    image: { logo },
  },
  {
    id: 3,
    name: "Crystal Agate Phone Grip",
    price: 18.99,
    image: { logo },
  },
  {
    id: 4,
    name: "Crystal Agate Phone Grip",
    price: 18.99,
    image: { logo },
  },
  {
    id: 5,
    name: "Crystal Agate Phone Grip",
    price: 18.99,
    image: { logo },
  },
  {
    id: 6,
    name: "Crystal Agate Phone Grip",
    price: 18.99,
    image: { logo },
  },
  {
    id: 7,
    name: "Crystal Agate Phone Grip",
    price: 18.99,
    image: { logo },
  },
  {
    id: 8,
    name: "Crystal Agate Phone Grip",
    price: 18.99,
    image: { logo },
  },
];

const ProductList = () => {
  return (
    <>
      <h2>All Products</h2>

      <div
        style={{
          borderBottom: "solid 4px gray",
          borderRadius: "10px",
          width: "50px",
          margin: "0px auto",
        }}
      ></div>

      <div>
        <FilterSort />
      </div>
      <section className="products">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button className="vbtn">View All</button>
      </section>
    </>
  );
};

export default ProductList;
