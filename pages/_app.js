import axios from "axios";

import { SWRConfig } from "swr";
import { ErrorBoundary } from "react-error-boundary";
import { createEmotionCache } from "../libs";

import { Theme as CustomMuiTheme, Cache as EmotionCache } from "../hoc";
import { Layout } from "../containers";
import { ErrorFallback } from "../components";

import "../axios.config";
import "../styles/globals.css";
import "../node_modules/nprogress/nprogress.css";
import { useRouting } from "../hooks";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useRouting();

  return (
    <EmotionCache emotionCache={emotionCache}>
      <CustomMuiTheme>
        <SWRConfig
          value={{
            fetcher: async (resource, init) => {
              return axios.get(resource, init).then((res) => {
                return res.data;
              });
            },
            onError: (error) => {},
          }}
        >
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ErrorBoundary>
        </SWRConfig>
      </CustomMuiTheme>
    </EmotionCache>
  );
}

export default MyApp;
