import { Typed } from "@/components/global";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints: BP }) => ({
  div: {
    "& > img": {
      position: "fixed",
      width: "100%",
      paddingRight: 50,
      marginTop: -95,
      marginLeft: -8,
      zIndex: -1,
    },
  },
  typed: {
    zIndex: 1,
    alignItems: 'center',
  },
}));

export default function Home() {
  const cls = useStyles();
  return (
    <div className={cls.div}>
      <img src="/images/home/leaf.jpg" alt="leaf" />
        <Typed string={"I develop creative websites."} className={cls.typed} />
    </div>
  );
}
