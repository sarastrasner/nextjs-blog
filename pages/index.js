import Head from 'next/head';
import locationData from '@/data/data.json';
import Link from 'next/link';

export const getStaticProps = async () => {
  return {
    props: {
      locationData,
    },
  };
};

export default function Home(data) {
  data.locationData.map(place => {
    <Link href={`/${place.title}`}></Link>;
    place.subPages.map(subPage => {
      <Link href={`/${place.title}/${subPage.name}`}></Link>;
    });
  });

  return (
    <>
      <div className="min-h-screen py-20 flex flex-col items-center justify-center">
        <Head>
          <title>Strassy Travels</title>
          <link rel="icon" href="@/public/favicons/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center text-navy">
          <h1 className="text-6xl font-bold dark:text-gray-100">
            Strassy Travels
          </h1>

          <p className="mt-3 text-2xl dark:text-gray-100">
            Where I've been and where I hope to go.
          </p>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-navy-600 focus:text-navy-600"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-navy-600 focus:text-navy-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
