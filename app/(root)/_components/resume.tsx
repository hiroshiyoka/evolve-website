import Translusent, { TranslusentCard } from "@/components/translusent";
import Image from "next/image";

const Resume = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-neutral-100 mb-4">
          Understanding Evolution
        </h2>
        <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
          Dive deeper into the fascinating journey of evolution, from the
          earliest life forms to the diversity of species today.
        </p>
      </div>
      <Translusent className="grid gap-6 lg:grid-cols-3 items-start group">
        {/* Card 1 */}
        <TranslusentCard>
          <div className="relative h-full bg-neutral-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
            <div
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 bg-neutral-800 rounded-full blur-[80px]"></div>
            </div>
            <div className="flex flex-col h-full items-center text-center">
              {/* Image */}
              <div className="relative inline-flex mb-3">
                <div
                  className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-slate-600"
                  aria-hidden="true"
                ></div>
                <Image
                  width={250}
                  height={200}
                  alt="Human Evolution Image"
                  className="inline-flex rounded-2xl"
                  src="https://res.cloudinary.com/dphi8xyge/image/upload/v1724938451/zw2kz1upc6lc3wilckko.webp"
                />
              </div>
              {/* Text */}
              <div className="grow mb-5">
                <h2 className="text-xl text-neutral-200 font-bold mb-2">
                  Human Evolution
                </h2>
                <p className="text-sm text-neutral-500">
                  Explore the journey of human evolution, from ancient hominins
                  to modern Homo sapiens. Learn about our ancestors and how we
                  came to be.
                </p>
              </div>
              <a
                href="/human"
                className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-neutral-800 hover:bg-neutral-900 border border-neutral-700 px-3 py-1.5 text-sm font-medium text-neutral-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-300 dark:focus-visible:ring-neutral-600 transition-colors duration-150"
              >
                Explore
              </a>
            </div>
          </div>
        </TranslusentCard>

        {/* Card 2 */}
        <TranslusentCard>
          <div className="relative h-full bg-neutral-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
            <div
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 bg-neutral-800 rounded-full blur-[80px]"></div>
            </div>
            <div className="flex flex-col h-full items-center text-center">
              {/* Image */}
              <div className="relative inline-flex mb-3">
                <div
                  className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-slate-600"
                  aria-hidden="true"
                ></div>
                <Image
                  width={250}
                  height={200}
                  alt="Animal Evolution Image"
                  className="inline-flex rounded-2xl"
                  src="https://res.cloudinary.com/dphi8xyge/image/upload/t_835x626/v1724938890/ojh4hwfqz817rrjkdqcx.webp"
                />
              </div>
              {/* Text */}
              <div className="grow mb-5">
                <h2 className="text-xl text-neutral-200 font-bold mb-2">
                  Animal Evolution
                </h2>
                <p className="text-sm text-neutral-500">
                  Discover the evolutionary history of animals, from the first
                  multicellular organisms to the complex creatures we see today.
                </p>
              </div>
              <a
                href="/animal"
                className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-neutral-800 hover:bg-neutral-900 border border-neutral-700 px-3 py-1.5 text-sm font-medium text-neutral-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-300 dark:focus-visible:ring-neutral-600 transition-colors duration-150"
              >
                Explore
              </a>
            </div>
          </div>
        </TranslusentCard>

        {/* Card 3 */}
        <TranslusentCard>
          <div className="relative h-full bg-neutral-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
            <div
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 bg-neutral-800 rounded-full blur-[80px]"></div>
            </div>
            <div className="flex flex-col h-full items-center text-center">
              {/* Image */}
              <div className="relative inline-flex mb-3">
                <div
                  className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-slate-600"
                  aria-hidden="true"
                ></div>
                <Image
                  width={250}
                  height={200}
                  alt="Charles Darwin Image"
                  className="inline-flex rounded-2xl"
                  src="https://res.cloudinary.com/dphi8xyge/image/upload/t_835x626/v1724939504/charles-darwin_sdgkpb.jpg"
                />
              </div>
              {/* Text */}
              <div className="grow mb-5">
                <h2 className="text-xl text-neutral-200 font-bold mb-2">
                  Evolutionary Concepts
                </h2>
                <p className="text-sm text-neutral-500">
                  Understand the fundamental concepts of evolution, such as
                  natural selection, genetic drift, and adaptation, and how they
                  shape life on Earth.
                </p>
              </div>
              <a
                href="/concepts"
                className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-neutral-800 hover:bg-neutral-900 border border-neutral-700 px-3 py-1.5 text-sm font-medium text-neutral-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-300 dark:focus-visible:ring-neutral-600 transition-colors duration-150"
              >
                Explore
              </a>
            </div>
          </div>
        </TranslusentCard>
      </Translusent>
    </div>
  );
};

export default Resume;
