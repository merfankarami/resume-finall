import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints: BP }) => ({
  div: {
    alignItems: 'center',
  },
}));

export default function Home() {
  const cls = useStyles();
  return (
    <div className={cls.div}>
      <img src="/images/home/leaf.jpg" alt="leaf" />
    </div>
  );
}
