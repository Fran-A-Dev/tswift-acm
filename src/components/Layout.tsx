import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>TS Discography</title>
      </Head>
      <div>Taylor Swift ACM/Faust Demo with Atlas preview env</div>
      <main>{children}</main>
    </>
  );
}
