import styles from "./PageLoader.module.css";

const PageLoader = () => {
  return (
    <div className="h-screen w-full home">
      <div className="absolute left-0 top-0 h-full w-full bg-white/10 flex justify-center items-center">
        <span className={styles.loader}></span>
      </div>
    </div>
  );
};

export default PageLoader;
