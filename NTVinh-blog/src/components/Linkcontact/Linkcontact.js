import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";

function Linkcontact() {
  return (
    <BottomNavigation className="IconContact">
      <BottomNavigationAction
        className="Git"
        href="https://github.com/devntv"
        target="_blank"
        icon={<GitHubIcon style={{ fontSize: "30px" }} />}
      />
      <BottomNavigationAction
        className="Linked"
        href="https://www.linkedin.com/in/nt-vinh-nguy%E1%BB%85n-b3a6411b9/"
        rel="noreferrer"
        target="_blank"
        icon={<LinkedInIcon style={{ fontSize: "33px" }} />}
      />
    </BottomNavigation>
  );
}

export default Linkcontact;
