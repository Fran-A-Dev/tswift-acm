import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>TS Discography</title>
      </Head>
      <div>Taylor Swift ACM/Faust Demo</div>
      <main>{children}</main>
    </>
  );
}
