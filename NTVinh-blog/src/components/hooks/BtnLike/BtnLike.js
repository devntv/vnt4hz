import Button from "@material-ui/core/Button";
import React from "react";
import useSound from "use-sound";
import hoverSound from "../../../assets/sounds/hoverSound.mp3";
//css
import "./BtnLike.css";

function BtnLike({ text, icon, link, onSound }) {
  //   const [isHovering, setIsHovering] = React.useState(false);
  const [playHover] = useSound(hoverSound);
  //   const wrapperFunc =() => {
  //     setIsHovering(true)
  //   }
  // console.log(onSound)
  return (
    <Button
      variant="contained"
      target="_blank"
      href={link}
      className="custom_btn_Like"
      endIcon={
        icon ? <div className="btn_icon_container_Like">{icon}</div> : null
      }
      onMouseEnter={onSound === true ? playHover : null}
    >
      <span className="btn_text_Like">{text}</span>
    </Button>
  );
}

export default BtnLike;
