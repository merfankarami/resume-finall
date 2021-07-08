import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
  appBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    marginTop: 30,
    "& > div": {
      "& > *": {
        marginLeft: 20,
        fontWeight: "bold",
      },
    },
  },
  typo: {
    color: "#7a7a7a",
    "& > span": {
      color: 'white',
    },
  },
}));
