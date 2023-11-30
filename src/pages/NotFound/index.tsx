import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

import classes from "@/pages/NotFound/style.module.css";
import Header from "@/components/Header";

const NotFound = () => {
  return (
    <div className={classes.container}>
      <Header title="Hacker News" />

      <div className={classes.box}>
        <h2 className={classes.mainHeader}>4️⃣🅾️4️⃣</h2>

        <h3 className={classes.secondHeader}>The page could not be found ❗⚠️</h3>
      </div>

      <Link to="/">
        <button className={classes.iconBack}>◀️</button>
      </Link>

      <Footer />
    </div>
  );
};

export default NotFound;
