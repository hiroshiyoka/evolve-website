import Hero from "@/components/hero";

const Home = () => {
  return (
    <main className="relative bg-neutral-900 min-h-screen overflow-hidden">
      <div className="h-screen flex items-center justify-center sm:px-10 px-5">
        <div className="max-w-3xl w-full">
          <Hero />
        </div>
      </div>
    </main>
  );
};

export default Home;
