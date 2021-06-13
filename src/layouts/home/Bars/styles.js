import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
  appBar: {
    // width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    marginTop: 30,
    "& > div": {
      "& > *": {
        marginLeft: 20,
      },
    },
  },
  contact: {
    position: "absolute",
    left: 60,
    bottom: 40,
    display: "flex",
    flexDirection: "column",
    "& > span": {
      marginTop: 10,
      fontSize: 18,
      fontWeight: "bold",
      color: "#7a7a7a",
    },
  },
  intro: {
    position: "absolute",
    left: 450,
    bottom: 40,
    fontSize: 18,
    fontWeight: "bold",
    "& > span": {
      color: "#4bffa5",
    },
  },
  social: {
    position: "absolute",
    right: 20,
    bottom: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 18,
    "& > span": {
      transform: "rotate(90deg)",
      color: "#7a7a7a",
    },
    "& > div": {
      display: "flex",
      flexDirection: "column",
      fontSize: 24,
      "& > *": {
        marginTop: 10,
        marginBottom: 10,
      },
    },
  },
  divider: {
    width: 1.3,
    height: 80,
    marginTop: 50,
    marginBottom: 12,
  },
}));