import classes from "./style.module.css";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Main = ({ children, style }: Props) => {
  return (
    <div className={classes.box}>
      <main className={classes.main} style={{ ...style }}>
        {children}
      </main>
    </div>
  );
};

export default Main;
