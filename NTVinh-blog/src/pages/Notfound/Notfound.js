import React from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import mew from "../../assets/sounds/mew.mp3";
//css
import "./NotFound.css";

function Notfound() {
  const [playMew] = useSound(mew);

  return (
    <>
      <div className="n-f">
        <h5>Page Not Found. We could not find what you were looking for.</h5>
        <div className="mew" onClick={() => playMew()} />
        <Link className="notfound_backHome" to="/">
          Go Back Home
        </Link>
        {/* <button onClick={()=> playMew()}>h</button> */}
      </div>
    </>
  );
}

export default Notfound;
