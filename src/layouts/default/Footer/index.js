import { Divider, Hidden } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { ExtLink } from "@/components/global";
import useStyles from "./styles";

const SocialLinks = [
  {
    to: "https://linkedin.com/in/merfankarami",
    icon: faLinkedin,
  },
  {
    to: "https://github.com/merfankarami",
    icon: faGithub,
  },
  {
    to: "https://instagram.com/m.erfan.k?utm_medium=copy_link",
    icon: faInstagram,
  },
];

export default function Footer() {
  const cls = useStyles();
  return (
    <div className={cls.container}>
      <Hidden smDown>
        <div className={cls.contact}>
          <span>E: m.erfankarami1998@gmail.com</span>
          <span>T: 09369240447</span>
        </div>
      </Hidden>
      <div className={cls.intro}>
        I'm <span>Mohammaderfan</span> Karami.
      </div>
      <Hidden smDown>
        <div className={cls.social}>
          <span>Follow Me</span>
          <Divider orientation="vertical" classes={{ root: cls.divider }} />
          <div>
            {SocialLinks.map((i, idx) => (
              <ExtLink href={i.to} key={idx}>
                <FontAwesomeIcon icon={i.icon} />
              </ExtLink>
            ))}
          </div>
        </div>
      </Hidden>
    </div>
  );
}
