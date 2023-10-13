import Styles from "../Navbar/Navbar.module.css";
import QtifyLogo from "./QtifyLogo.svg";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className={Styles.container}>
      <img src={QtifyLogo} alt="qtify" className={Styles.imageLogo}></img>
      <input
        className={Styles.input}
        type="text"
        placeholder="Search a album of your choice"
      ></input>
      <button className={Styles.button} type="button">
        <AiOutlineSearch />
      </button>

      <div className={Styles.feedbackContainer}>
        <button type="button" className={Styles.feedback}>
          Give Feedback
        </button>
      </div>
    </div>
  );
};
export default Navbar;
