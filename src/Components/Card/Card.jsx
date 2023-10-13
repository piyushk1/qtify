import Styles from "./Card.module.css";
import Bollywood from "../../assets/bollywood.png";
const Card = () => {
  return (
    <div className={Styles.Card}>
      <div>
        <img src={Bollywood} alt="bollywood"></img>
      </div>

      <div className={Styles.followersOuter}>
        <div className={Styles.followers}>{100}M Followers</div>
      </div>
      <div className={Styles.title}>New Bollywood</div>
    </div>
  );
};

export default Card;
