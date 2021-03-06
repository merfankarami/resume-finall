import { Typed } from "@/components/global";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints: BP }) => ({
  div: {
    "& > img": {
      position: "fixed",
      width: "100%",
      paddingRight: 50,
      marginTop: -180,
      marginLeft: -8,
      zIndex: -1,
    },
  },
  intro: {
    position: "absolute",
    left: 450,
    bottom: 40,
    fontSize: 18,
    fontWeight: "bold",
    color: "#7a7a7a",
    "& > span": {
      color: "#4bffa5",
    },
    [BP.down("xs")]: {
      position: "absolute",
      left: 20,
    },
  },
  typed: {
    zIndex: 1,
  },
}));

export default function Home() {
  const cls = useStyles();
  return (
    <div className={cls.div}>
      <img src="/images/home/leaf.jpg" alt="leaf" />
      <Typed string={"I develop creative websites."} className={cls.typed} />
      <div className={cls.intro}>
        I'm <span>Mohammaderfan</span> Karami.
      </div>
    </div>
  );
}
