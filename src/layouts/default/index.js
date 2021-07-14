import { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Header from "./Header";
import Footer from "./Footer";
import AppDrawer from "./Drawer";

const useStyles = makeStyles(({ breakpoints: BP }) => ({
  appBar: {
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
  child: {
    paddingTop: 80,
    [BP.down("xs")]: {
      paddingTop: 54,
    },
  },
}));

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
      <div className={clsx(className, cls.child)}>{children}</div>
      <Footer />
    </main>
  );
}
