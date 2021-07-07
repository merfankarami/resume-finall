import Link from "next/link";
import { Toolbar, Typography, Button, Divider } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Links from "./AppLinks";
import useStyles from "./styles";

export default function Bars() {
  const cls = useStyles();

  return (
    <div>
      <Toolbar classes={{ root: cls.appBar }}>
        <Typography variant="h6">Mohammaderfan Karami</Typography>
        <div>
          {Links.map((i, idx) => (
            <Link href={i.to}>
              <Button key={idx} color="secondary">
                {i.label}
              </Button>
            </Link>
          ))}
        </div>
      </Toolbar>
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
        <div>
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
}