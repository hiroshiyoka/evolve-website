import { Globe, Pen } from "lucide-react";

import { Link } from "@/components/ui/link";
import { Spotlight } from "@/components/ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="text-center">
        <Spotlight
          fill="white"
          className="-top-40 left-0 md:left-60 md:-top-20 h-screen"
        />
        <h1 className="text-6xl pb-2 md:pb-4 lg:text-8xl 2xl:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-600">
          Evolve
        </h1>
        <p className="font-medium text-balance text-neutral-300 pb-4">
          Explore the Journey of Life. From the Depths of Time to the Complexity
          of Today, Discover the Story of Evolution.
        </p>

        <div className="flex items-center justify-center gap-2 text-neutral-300">
          <Link
            href="/"
            variant="link"
            rel="noopener noreferrer"
            title="Explore the journey of life"
            className="group max-md:order-2"
          >
            <Globe size="1rem" className="mr-2 shrink-0" />
            Explore
          </Link>

          <Link
            href="/blog"
            title="Blog about Evolution"
            variant="link"
            className="group"
          >
            <Pen size="0.975rem" className="mr-2 shrink-0" />
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
