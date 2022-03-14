import "../styles/globals.css";
import { createEmotionCache } from "../libs";

import { Theme, Cache } from "../hoc";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Cache emotionCache={emotionCache}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </Cache>
  );
}

export default MyApp;
