import "../CSS Styles/hero.css";
import logo from "../assets/react.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="fcon">
        <div className="hero-content">
          <h1>
            Welcome to <br /> <span>Pop Rock Crystal Shop!</span>{" "}
          </h1>
          <p className="desc">
            Here you will find unique phone accessories, crystals, jewelry, and
            more. Free shipping inside the U.S. and our phone grips come with a
            limited warranty.Enjoy!
          </p>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button className="shop-now-btn">Shop Now</button>
            <p style={{ fontSize: "16px", color: "black" }}>about us</p>
          </div>
        </div>
        <div className="hero-product">
          <div>
            <img src={logo} alt="Crystal Agate Phone Grip" />
          </div>
          <span className="new-lot-badge">New Lot</span>
          <p style={{ color: "black" }}>Crystal Agate Phone Grip - $18.99</p>
        </div>
      </div>
      <svg
        className="curve"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,160L60,149.3C120,139,240,117,360,117.3C480,117,600,139,720,149.3C840,160,960,160,1080,120C1200,60,1320,20,1380,0L1440,-20L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
