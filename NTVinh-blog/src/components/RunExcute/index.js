import { Grid, Typography } from "@material-ui/core";
import { RiCloseFill } from "react-icons/ri";
import { SiVisualstudiocode } from "react-icons/si";
import {
  VscAccount,
  VscDebugAlt,
  VscExtensions,
  VscFiles,
  VscGear,
  VscGitMerge,
  VscSearch,
} from "react-icons/vsc";
import { dataFileTopVscode } from "../../contants/topFileVscode";
import styles from "./styles.module.css";
const dataTitleRun = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];
const dataIconLeft = [
  <VscFiles />,
  <VscSearch />,
  <VscGitMerge />,
  <VscDebugAlt />,
  <VscExtensions />,
];
const dataIconLeftSpace = [<VscAccount />, <VscGear />];
function RunExcute(props) {
  return (
    <Grid container item className={styles.container}>
      <Grid container xs={1} item className={styles.topHeader}>
        <SiVisualstudiocode className={styles.logoVs} />
        <Grid className={styles.topMenu}>
          {dataFileTopVscode.map((menu, i) => (
            <Typography key={i}>{menu}</Typography>
          ))}
        </Grid>

        <Grid className={styles.nameMain}>
          <Typography>VinhDz.js</Typography>
        </Grid>

        <Grid className={styles.topClose}>
          <RiCloseFill />
        </Grid>
      </Grid>

      <Grid container item xs={11} className={styles.center}>
        <Grid item xs={1} className={styles.left} container direction="column">
          <Grid>
            {dataIconLeft.map((item, index) => (
              <Grid
                key={index}
                style={{ width: "40px", height: "40px" }}
                container
                className={styles.wrapIcon}
              >
                {item}
              </Grid>
            ))}
          </Grid>
          <Grid>
            {dataIconLeftSpace.map((item, index) => (
              <Grid key={index} className={styles.wrapIconBottom}>
                {item}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RunExcute;
