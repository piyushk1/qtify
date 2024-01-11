/* eslint-disable react/prop-types */

import styles from "./NavBar.module.css";
import LogoImage from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import FeedBackButton from "../FeedBackButton/FeedBackButton";
import { useNavigate } from "react-router-dom";

const NavBar = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div
          className={styles.logoWrapper}
          onClick={() => navigate(`/`)}
          style={{ cursor: "pointer" }}
        >
          
          <LogoImage id={styles.logo} />
        </div>
        <div className={styles.searchWrapper}>
          <SearchBar placeholder="Search an album of your choice" data={data} />
        </div>
      </nav>
      <FeedBackButton />
    </div>
  );
};

export default NavBar;
