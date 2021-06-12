import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from '@material-ui/core/Divider';
import useStyles from "./styles";

export default function HomeLayout() {
  const cls = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar classes={{ root: cls.appBar }}>
          <Typography variant="h6">Mohammaderfan Karami</Typography>
          <div>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Resume</Button>
            <Button color="inherit">Works</Button>
            <Button color="inherit">Contacts</Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className={cls.contact}>
        <span>E: m.erfankarami1998@gmail.com</span>
        <span>T: 09369240447</span>
      </div>
      <div className={cls.intro}>
        I'm <span>Mohammaderfan</span> Karami.
      </div>
      <div className={cls.social}>
        <span>Follow Me</span>
        <Divider orientation="vertical" className={cls.divider} />
      </div>
    </div>
  );
}
