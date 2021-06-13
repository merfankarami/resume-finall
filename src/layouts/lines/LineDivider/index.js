import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    width: 1.5,
    height: 80,
  },
}));
export default function Lines() {
  const cls = useStyles();
  return (
    <div className={cls.container}>
      <Divider orientation="vertical" className={cls.divider} />
      <Divider orientation="vertical" className={cls.divider} />
      <Divider orientation="vertical" className={cls.divider} />
    </div>
  );
}
