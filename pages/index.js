import Head from 'next/head';
import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import SmallCard from "../components/SmallCard.js";

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Jeremy's Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

        {/* pull data from server - API endpoints */}
        {exploreData?.map(item => (
          <SmallCard 
            img={item.img} 
            distance={item.distance} 
            location={item.location} 
          />
        ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then((res) => res.json());

  return {
    props: {
      exploreData
    }
  }
}