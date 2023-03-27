import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-8 sm:py-10 lg:py-16">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-lg dark:text-sky-100 ring-1 ring-gray-900/10 hover:ring-gray-100/20">
            Announcing our premier python conference in india.{" "}
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true"></span>Read
              more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
            <span className="text-lime-400">Py</span>
            <span className="text-yellow-300">Con </span>
            India&nbsp;<span>2023</span>
          </h1>
          <p className="mt-6 text-lg leading-8 dark:text-neutral-200 text-neutral-900">
            PyCon India 2023 is the premier conference for Python enthusiasts
            and professionals, offering an unparalleled opportunity to dive deep
            into the world of Python and explore its limitless potential.
          </p>
          <p className="mt-6 text-lg leading-8 dark:text-neutral-200 text-neutral-900">
            From exciting keynotes and workshops to interactive sessions and
            networking events, this three-day event promises to be an
            unforgettable experience for anyone interested in the latest
            developments in Python. Join us and be a part of the thriving Python
            community, as we come together to learn, grow, and innovate!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join Us
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
