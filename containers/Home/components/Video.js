import { useRef } from "react";

import { Player, ControlBar } from "video-react";

const Video = ({ src }) => {
  const ref = useRef(null);

  return (
    <Player
      className="hello-world"
      autoPlay
      muted
      loop
      fluid={false}
      width={"100%"}
      height={"100%"}
      ref={(player) => {
        ref.current = player;
      }}
    >
      <source src={src} />
      <ControlBar disableCompletely={true} autoHide={false} disableDefaultControls={true} />
    </Player>
  );
};

export default Video;
