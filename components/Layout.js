import Head from "next/head";
import Navbar from "./Navbar";
import { ContextProvider } from "../context/ContextProvider";

const Layout = ({ children }) => (
  <>
    <ContextProvider>
      <Head>
        <title>Workers Management</title>
      </Head>
      <Navbar />
      {children}
    </ContextProvider>
  </>
);

export default Layout;
