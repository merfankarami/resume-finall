import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

export default function HomeLayout() {
  const cls = useStyles();

  return (
    <AppBar>
      <Toolbar className={cls.toolBar}>
        <Typography variant="h6">Mohammaderfan Karami</Typography>
        <div>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Resume</Button>
          <Button color="inherit">Works</Button>
          <Button color="inherit">Contacts</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
