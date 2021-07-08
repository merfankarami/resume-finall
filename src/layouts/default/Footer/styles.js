import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(({ breakpoints: BP }) => ({
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
    color: "#7a7a7a",
    "& > span": {
      color: "#4bffa5",
    },
    [BP.down("xs")]: {
      position: "absolute",
      left: 20,
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
    color: "#7a7a7a",
    "& > span": {
      transform: "rotate(90deg)",
      color: "#7a7a7a",
    },
    "& > div": {
      display: "flex",
      flexDirection: "column",
      fontSize: 24,
      '& > a': {
        transition: 'all 0.2s ease-in-out',
        color: "#7a7a7a",
        '&:hover': {
          transform: 'scale(1.2)',
        },
      },
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
    backgroundColor: "#7a7a7a",
  },
  container: {
    zIndex: 1,
  },
}));
