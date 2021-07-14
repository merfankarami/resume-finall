import { Typed } from "@/components/global";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints: BP }) => ({
  div: {
    position: "fixed",
    width: "100%",
    height: "100%",
    paddingRight: 50,
    marginTop: -175,
    marginLeft: -8,
    backgroundColor: "black",
  },
  intro: {
    position: "absolute",
    left: 450,
    bottom: 40,
    fontSize: 18,
    fontWeight: "bold",
    color: "#7a7a7a",
    "& > span": {
      color: "white",
    },
    [BP.down("xs")]: {
      position: "absolute",
      left: 20,
    },
  },
  typo: {
    alignItems: "center",
    marginTop: "18%",
    marginLeft: "38%",
    color: "white",
  },
}));

export default function Resume() {
  const cls = useStyles();
  return (
    <div className={cls.div}>
      <Typography variant="h1" className={cls.typo}>
        Resume
      </Typography>
      <div className={cls.intro}>
      <span>Home</span> / Resume
      </div>
    </div>
  );
}
