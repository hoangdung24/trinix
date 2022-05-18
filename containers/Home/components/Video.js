import { useEffect, useRef } from "react";

import { Player, ControlBar } from "video-react";

const Video = ({ src }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.actions.play();
    }
  }, []);

  return (
    <Player
      autoPlay
      muted
      loop
      playsInline
      fluid={false}
      width={"100%"}
      height={"100%"}
      type="video/mp4"
      ref={(player) => {
        ref.current = player;
      }}
    >
      <source src={src} />
      <ControlBar
        disableCompletely={true}
        autoHide={false}
        disableDefaultControls={true}
      />
    </Player>
  );
};

export default Video;
