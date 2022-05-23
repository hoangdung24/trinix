import axios from "axios";

import { SWRConfig } from "swr";
import { ErrorBoundary } from "react-error-boundary";
import { createEmotionCache } from "../libs";
import CssBaseline from "@mui/material/CssBaseline";

import { Theme as CustomMuiTheme, Cache as EmotionCache } from "../hoc";
import { Layout } from "../containers";
import { ErrorFallback } from "../components";

import "../axios.config";
import "../styles/globals.css";
import "video-react/dist/video-react.css";
import "../node_modules/nprogress/nprogress.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRouting } from "../hooks";

import { SettingConfig, GlobalConfig } from "../contexts";

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
            fallback: pageProps?.fallback || {},
          }}
        >
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <SettingConfig>
              <GlobalConfig>
                <Layout>
                  <CssBaseline />
                  <Component {...pageProps} />
                </Layout>
              </GlobalConfig>
            </SettingConfig>
          </ErrorBoundary>
        </SWRConfig>
      </CustomMuiTheme>
    </EmotionCache>
  );
}

export default MyApp;
