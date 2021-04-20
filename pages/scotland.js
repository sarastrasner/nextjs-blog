import Carousel from '@/components/Carousel';

export default function Scotland() {
  function Photo(altText, caption, header) {
    this.src = `/${altText}.jpg`;
    this.altText = altText;
    this.caption = caption;
    this.header = header;
    this.key = Math.random();
  }

  let images = [];
  function addPhoto(alt, caption, header) {
    images.push(new Photo(alt, caption, header));
  }
  addPhoto('fairyHills', 'Isle of Skye', 'The Fairy Hills');
  addPhoto('brothersPoint', 'Isle of Skye', 'Brothers Point');
  addPhoto('edinburgh', 'caption2', 'Edinburgh');

  let contentBlocks = [
    {
      name: 'skye',
      longName: 'Isle of Syke',
      blurb: 'The most beautiful place in Scotland',
    },
    { name: 'edinburgh', blurb: 'capital of Scotland' },
    {
      name: 'speyside',
      blurb: "Today's rain is tomorrow's whiskey",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center pb-5 dark:bg-navy">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center text-navy">
          <h1 className="text-6xl m-6 font-bold dark:text-gray-100">
            Scotland
          </h1>

          <Carousel images={images} />

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            {contentBlocks.map(item => {
              return (
                <a
                  href={`/ireland/${item.name}`}
                  className="p-6 mt-6 text-left border dark:text-white w-96 rounded-xl hover:text-green-600 focus:text-green-600"
                >
                  <h3 className="text-2xl dark:text-white text-green font-bold">
                    {item.longName
                      ? item.longName.charAt(0).toUpperCase() +
                        item.longName.slice(1)
                      : item.name.charAt(0).toUpperCase() +
                        item.name.slice(1)}{' '}
                    &rarr;
                  </h3>
                  <p className="mt-4 text-green dark:text-white text-xl">
                    {item.blurb}
                  </p>
                </a>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
