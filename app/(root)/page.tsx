import Hero from "@/components/hero";

const Home = () => {
  return (
    <main className="relative bg-neutral-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-3xl w-full">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
