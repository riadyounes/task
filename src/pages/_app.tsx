import { CssBaseline } from "@material-ui/core";
import App, { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CssBaseline>
      <Component {...pageProps} />
    </CssBaseline>
  );
}

export default MyApp;
