import { useState } from "react";
import { Divider, Hidden, useMediaQuery } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Header from "./Header";
import AppDrawer from "./Drawer";
import useStyles from "./styles";

export default function DefaultLayout({
  className,
  children,
  headerTransparent,
}) {
  const cls = useStyles();
  const [menu, setMenu] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <main>
      {isMobile ? (
        <AppDrawer open={menu} onClose={() => setMenu(false)} />
      ) : null}
      <Header openMenu={() => setMenu(true)} transparent={headerTransparent} />
      <div className={cls.child}>{children}</div>
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
          <Divider orientation="vertical" className={cls.divider} />
          <div>
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </Hidden>
    </main>
  );
}
