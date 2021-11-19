import { Box, CircularProgress } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.css";

function VinhdzLoading() {
  return (
    <div className={styles.Container}>
      <div className={styles.Wrap}>
        <Box className={styles.Wraplogo}>
          <div className={styles.LogoName}>Vinh</div>
          <div className={styles.logo}>DZ</div>
        </Box>
        <CircularProgress
          value={100}
          size={100}
          thickness={2}
          className={styles.progress}
        />
      </div>
    </div>
  );
}

export default VinhdzLoading;
