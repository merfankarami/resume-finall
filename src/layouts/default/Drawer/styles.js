import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ breakpoints: BP }) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
    backgroundColor: "black",
  },
  drawerPaper: {
    width: 240,
  },
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 45,
  },
  span: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 15,
  },
}));
