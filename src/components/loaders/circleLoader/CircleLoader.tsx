import styles from "./CircleLoader.module.css";

const CircleLoader = ({ loader }) => {
  if (loader) {
    return <span className={styles.loader}></span>;
  }
  return <></>;
};

export default CircleLoader;
