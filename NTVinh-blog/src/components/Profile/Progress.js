import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import "./Progress.css";

const useStyles = makeStyles({
  progress: {
    position: "absolute",
    top: "45px",
    width: "100%",
    transition: ".5s all ease-in-out",
    backgroundColor: "#ffffff",
  },
});

function Progress({ setOpen }) {
  const classes = useStyles();
  const [valueProgress, setValueProgress] = useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  //set hidden progress story profile

  useEffect(() => {
    progressRef.current = () => {
      if (valueProgress > 100) {
        setOpen(false);
      } else {
        const vl1 = Math.random() * 8;
        const vl2 = Math.random() * 10;
        setValueProgress(valueProgress + vl1);
        setBuffer(valueProgress + vl1 + vl2);
      }
    };
  });
  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <LinearProgress
        variant="buffer"
        className={classes.progress}
        value={valueProgress}
        valueBuffer={buffer}
      />
    </>
  );
}

export default Progress;
