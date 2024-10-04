import "../CSS Styles/header.css";
import cart from "../assets/cart-basket.svg";
import diamond from "../assets/diamond.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="alogo">
        <button className="logo-btn">
          <img src={diamond} width={50} height={50} alt="" />
        </button>
        <div className="logo">Pop Rock Crystal</div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </nav>
      <div className="cart-logo">
        <img
          src={cart}
          width={40}
          height={40}
          style={{ color: "white" }}
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
