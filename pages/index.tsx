import Image from "next/image";
import { Inter } from "next/font/google";
import PyConIndia from "./pycon-landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-3xl py-8 sm:py-10 lg:py-16 sm:max-w-1xl">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center justify-center">
          <div className="relative py-1 px-3 text-md leading-6 text-lg dark:text-sky-100">
            Announcing our premier Python Conference in India.
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-tight text-white-900 sm:text-6xl">
            <span className="text-lime-400">Py</span>
            <span className="text-yellow-300">Con </span>
            India&nbsp;<span>2023</span>
          </h1>
          <p className="font-bold text-xl mt-6">Hyderabad, 29 Sept - 02 Oct</p>
          <p className="mt-6 text-xl leading-8 dark:text-neutral-200 text-neutral-900">
            PyCon India 2023 is the premier conference for Python enthusiasts
            and professionals, offering an unparalleled opportunity to dive deep
            into the world of Python and explore its limitless potential.
          </p>
          <p className="mt-6 text-xl leading-8 dark:text-neutral-200 text-neutral-900">
            From exciting keynotes and workshops to interactive sessions and
            networking events, this four-day event promises to be an
            unforgettable experience for anyone interested in the latest
            developments in Python. Join us and be a part of the thriving Python
            community, as we come together to learn, grow, and innovate!
            <br />
            <br />
            Stay tuned for more updates!
          </p>
          <div className="mt-10 text-xl flex items-center justify-center gap-x-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </div>
      <PyConIndia />
    </div>
  );
}
