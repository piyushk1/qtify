
import styles from "./MenuItems.module.css";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ album }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/album/${album?.slug}`);
  };

  return (
    <div className={styles.menuItemWrapper}>
      <div className={styles.wrappers} onClick={handleItemClick}>
        <div className={styles.imgTextWrapper}>
          <div className={styles.thumbnailWrapper}>
            <img
              src={album?.image}
              alt="albumImage"
              width="66"
              height="71"
            />
          </div>
          <h4>{album?.title}</h4>
        </div>
        <div className={styles.folloWrapper}>
          <h4>{album?.follows} Follows</h4>
        </div>
      </div>
    </div>
  );
};

const MenuItems = ({ albums }) => {
  return (
    <div className={styles.wrapper}>
      {albums?.length ? (
        albums.map((album) => <MenuItem key={album.id} album={album} />)
      ) : (
        <p>No albums available.</p>
      )}
    </div>
  );
};

export default MenuItems;
