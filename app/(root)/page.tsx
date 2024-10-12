import Hero from "./_components/hero";
import Resume from "./_components/resume";

const Home = () => {
  return (
    <main className="relative bg-neutral-900 overflow-y-auto overflow-x-hidden">
      <section className="h-screen flex items-center justify-center sm:px-10 px-5">
        <div className="max-w-3xl w-full">
          <Hero />
        </div>
      </section>
      <section className="h-screen flex items-center justify-center sm:px-10 px-5">
        <Resume />
      </section>
    </main>
  );
};

export default Home;
