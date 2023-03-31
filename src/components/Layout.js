import Footer from "./Footer";
import NavBar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <NavBar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
