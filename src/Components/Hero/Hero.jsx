import Styles from "./Hero.module.css";
import Headphones from "../../assets/Headphones.svg";

const Hero = () => {
  return (
    <div className={Styles.heroContainer}>
      <div>
        <h1 className={Styles.firstLine}>100 Thousand Songs, ad-free</h1>
        <h1 className={Styles.secondLine}>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={Headphones} alt="headphones"></img>
      </div>
    </div>
  );
};

export default Hero;
