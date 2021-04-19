import Carousel from '@/components/Carousel';
import Image from 'next/image';

export default function Canada() {
  let canadaImages = [<Image src="/UBC.jpg" alt=" UBC" width="64" height="64" />, <Image src="/vanDusen.jpg" alt=" vanDusen" width="64" height="64" />]
  return (
    <>
      <div className="py-20 flex flex-col items-center justify-center dark:bg-navy">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center text-navy">
          <h1 className="text-6xl font-bold dark:text-gray-100">
            Beautiful British Columbia
          </h1>

          <Carousel 
          images={canadaImages}
          />
          {/* <p className="mt-3 text-2xl dark:text-gray-100">
            Where I've been and where I hope to go.
          </p> */}

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Vancouver &rarr;</h3>
              <p className="mt-4 text-xl">
                Delicious food, friendly people, and gorgeous scenery.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Whistler &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Victoria &rarr;</h3>
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
