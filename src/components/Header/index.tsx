import classes from "./style.module.css";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <div className={classes.box}>
      <h2 className={classes.header}>{title}</h2>
    </div>
  );
};

export default Header;
