import { Box } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

function ToggleDarkMode({ Click }) {
  const [toggleClick, setToggleClick] = React.useState(false);
  const [toggleFocus, setToggleFocus] = React.useState(false);
  const handleClick = () => {
    setToggleFocus(true);
    setToggleClick(!toggleClick);
    Click();
  };
  const wrapperRef = React.useRef(null);
  function useOutsideSearchCLick(wrapRef) {
    React.useEffect(() => {
      function handleClickOutside(e) {
        if (wrapRef.current && !wrapRef.current.contains(e.target))
          setToggleFocus(false);
      }
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [wrapRef]);
  }
  useOutsideSearchCLick(wrapperRef);

  return (
    <div
      ref={wrapperRef}
      className={clsx(
        styles.toggleWrap,
        toggleClick && styles.toggleChecked,
        toggleFocus && styles.toggleFocused
      )}
      onClick={handleClick}
    >
      <Box className={styles["toggle-track"]}>
        <Box className={styles["toggle-track-check"]}>
          <span className={styles.toggleSun}>🌞</span>
        </Box>
        <Box className={styles["toggle-check-x"]}>
          <span className={styles.toggleMoon}>🌜</span>
        </Box>
      </Box>
      <Box className={styles.toogleThumb}></Box>
      <input type="checkbox" className={styles.ScreenOnly} />
    </div>
  );
}

export default ToggleDarkMode;
