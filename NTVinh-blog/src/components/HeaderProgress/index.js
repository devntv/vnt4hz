import React, { useEffect } from "react";
import { ProgressBar, ProgressBarChild } from "./styles/HeaderProgress";

function ScrollProgress() {
  const progressBarHandle = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollEd = `${totalScroll / windowHeight}`;
    const progressBar = document.getElementById("progressBarchild");

    progressBar.style.transform = `scale(${scrollEd}, 1.2)`;
    progressBar.style.opacity = `${scrollEd * 3}`;
  };

  useEffect(() => {
    window.addEventListener("scroll", progressBarHandle);
  }, []);

  return (
    <ProgressBar>
      <ProgressBarChild id="progressBarchild"></ProgressBarChild>
    </ProgressBar>
  );
}

export default ScrollProgress;
