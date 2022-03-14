import "../styles/globals.css";
import { createEmotionCache } from "../libs";

import { Theme as CustomMuiTheme, Cache as EmotionCache } from "../hoc";
import { Layout } from "../containers";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <EmotionCache emotionCache={emotionCache}>
      <CustomMuiTheme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomMuiTheme>
    </EmotionCache>
  );
}

export default MyApp;
