import type { AppProps } from "next/app";

import { JiraProvider } from "@/providers";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JiraProvider.Provider>
      <Component {...pageProps} />
    </JiraProvider.Provider>
  );
}
