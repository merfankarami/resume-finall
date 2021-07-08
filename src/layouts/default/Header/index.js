import { Toolbar, Typography, Button, Hidden, IconButton } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
// import { Link } from '@/components/global';
import Link from 'next/link';
import Links from "@/layouts/default/AppLinks";
import useStyles from "./styles";

export default function Header({ openMenu, transparent = false }) {
  const cls = useStyles();

  return (
    <header>
      <Toolbar classes={{ root: cls.appBar }}>
        <Typography variant="h6" className={cls.typo}>Mohammaderfan <span>Karami</span></Typography>
        <Hidden xsDown>
          <div>
            {Links.map((i, idx) => (
              <Link href={i.to}>
                <Button key={idx} color="secondary">
                  {i.label}
                </Button>
              </Link>
            ))}
          </div>
        </Hidden>
        <Hidden smUp>
          <IconButton onClick={openMenu}>
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </header>
  );
}
