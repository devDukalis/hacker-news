import classes from "./style.module.css";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <div className={classes.box}>
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Main;
