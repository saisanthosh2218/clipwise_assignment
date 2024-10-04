import BestPrice from "./Components/BestPrice";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
// import ProductCard from "./Components/ProductCard";
import Products from "./Components/Products";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <ProductCard /> */}
      <Products />
      <BestPrice />
    </div>
  );
};

export default App;
