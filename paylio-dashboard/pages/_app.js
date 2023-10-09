import Layout from "@/components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useEffect } from "react";

//main css
import { PaylioProvider } from "@/context/context";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <title>
            Paylio - Money Transfer and Online Payments Dashboard React Next JS
            Template
          </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <PaylioProvider>
          <Component {...pageProps} />
        </PaylioProvider>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>
          Paylio - Money Transfer and Online Payments Dashboard React Next JS
          Template
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <PaylioProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PaylioProvider>
    </>
  );
}
