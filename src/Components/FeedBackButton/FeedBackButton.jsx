
import styles from "./FeedBackButton.module.css";

const FeedBackButton = () => {
  return (
    <div >
      <button className={styles.buttonContainer}>
       <p className={styles.ButtonText}>Give Feedback</p> 
      </button>
    </div>
  );
};

export default FeedBackButton;
