import { SwipeableDrawer, Button } from "@material-ui/core";

import { Link } from "@/components/global";
import Links from "@/layouts/default/AppLinks";
import useStyles from "./styles";

export default function AppDrawer({ open, onClose }) {
  const cls = useStyles();
  return (
    <SwipeableDrawer
      open={open}
      onClose={onClose}
      onOpen={() => null}
      disableSwipeToOpen
      disableBackdropTransition
      anchor="right"
      classes={{ paper: cls.drawer }}>
      <div className={cls.div}>
        {Links.map((i, idx) => (
          <Link href={i.to}>
            <Button key={idx} color="secondary">
              <span className={cls.span}>{i.label}</span>
            </Button>
          </Link>
        ))}
      </div>
    </SwipeableDrawer>
  );
}
