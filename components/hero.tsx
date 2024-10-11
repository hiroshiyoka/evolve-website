import { Globe, Pen } from "lucide-react";

import { Link } from "@/components/ui/link";
import { Spotlight } from "@/components/ui/Spotlight";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center relative">
        <Spotlight
          fill="white"
          className="absolute -top-60 left-0 md:left-20 md:-top-52 h-screen"
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
            variant="secondary"
            rel="noopener noreferrer"
            className="group max-md:order-2 inline-flex items-center"
            title="Explore the journey of life"
          >
            <span className="inline-flex items-center">
              <Globe size={16} className="mr-1.5 shrink-0" />
              Explore
            </span>
          </Link>

          <Link
            href="/blog"
            variant="ghost"
            className="group inline-flex items-center"
            title="Blog about Evolution"
          >
            <span className="inline-flex items-center">
              <Pen size={16} className="mr-1.5 shrink-0" />
              Blog
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
