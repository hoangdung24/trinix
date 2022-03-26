import { useRef, useEffect, useCallback } from "react";

import { Player, ControlBar } from "video-react";

const Video = ({ src }) => {
  console.log(src);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // ref.current.subscribeToStateChange(test);
      // console.log(ref.current.getState().player);
    }
  }, [ref]);

  const test = useCallback((...props) => {
    console.log(props);
  }, []);

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
