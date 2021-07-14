import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    boxShadow: '0px 8px 22px rgba(0, 0, 0, 0.05)',
    backgroundColor: '#ffffff',
    padding: '25px 30px',
    transition: 'all 0.3s ease-in-out',
  },
});

export default function Card({ children, className }) {
  const cls = useStyles();
  return <div className={clsx(cls.card, className)}>{children}</div>;
}
