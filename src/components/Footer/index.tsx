import classes from "./style.module.css";

const Footer = () => {
  return (
    <div className={classes.box}>
      <footer className={classes.footer}>
        <span className={classes.linkTitle}>
          Site{" "}
          <a
            className={classes.link}
            href="https://news.ycombinator.com/news"
            target="_blank"
            rel="noreferrer">
            🌐
          </a>
        </span>
        <span className={classes.linkTitle}>
          API{""}
          <a
            className={classes.link}
            href="https://github.com/HackerNews/API"
            target="_blank"
            rel="noreferrer">
            📲
          </a>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
