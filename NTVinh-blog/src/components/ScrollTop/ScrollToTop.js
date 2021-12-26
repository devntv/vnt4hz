import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 9999,
    position: "fixed",
    transition: "all .3s ease-in",
    fontSize: "10px",
    color: "aqua",
    "&:hover, &.Mui-focusVisible": {
      transition: ".3s",
      color: "#00ffc4fa",
    },
    right: "20px",
    top: "50%",
  },
}));

function ScrollToTop({ showBelow }) {
  // style

  const classes = useStyles();

  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };
  //scroll mouse move
  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });
  const handleScrollTop = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <>
      {show && (
        <IconButton onClick={handleScrollTop} className={classes.toTop}>
          <ExpandLessIcon className="inconTop" />
        </IconButton>
      )}
    </>
  );
}

export default ScrollToTop;
