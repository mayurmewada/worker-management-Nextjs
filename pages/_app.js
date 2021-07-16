import App from "next/app";
import "semantic-ui-css/semantic.min.css";
import Layout from "../components/Layout";
import ContextProvider from "../context/ContextProvider";
import "../css/style.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
