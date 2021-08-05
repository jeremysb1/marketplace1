import Head from 'next/head';
import Header from "../components/Header.js";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Jeremy's Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* Banner */}

    </div>
  );
}
