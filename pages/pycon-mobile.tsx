import Image from "next/image";
import greensquare from "../public/green-squar.png";
import yellowsquare from "../public/yellow-square.png";
import ornagreen from "../public/orna-green.png";
import ornayellow from "../public/orna-yellow.png";
import Wheel from "../public/wheel-grey.png";
import Banner from "./banner";

export default function PyConIndiaMobile() {
  return (
    <div className="py-con-mobile">
      <div className="Py-Main-Area">
        <div className="px-3 text-md text-center text-sm text-zinc-900 font-bold">
          🎉 Announcing 🎉<br></br>
          Our Premier Python Conference in India.
        </div>
        <div className="py-banner-area border-dashed border-py-blue border-b-4">
          <div className="py-banner text-center">
            <div className="banner-area">
              <div className="Banner">
                <div className="banner-split uppercase font-bold text-2xl">
                  <div>
                    <div className="Pycon-Text text-right">
                      <span className="text-py-blue tracking-wide">py</span>
                      <span className="text-yellow-300 tracking-wide">con</span>
                    </div>
                    <div className="India-Text text-py-orange text-right">
                      India
                    </div>
                  </div>
                  <div>
                    <Image className="h-10 w-10" src={Wheel} alt="wheel" />
                    <div />
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 py-hyd grid justify-center flex items-center">
          <div className="Lotus-Yellow-Hyd">
            <Image
              className="w-auto float-right"
              src={yellowsquare}
              alt="yellowsquare"
            />
          </div>
          <div className="Hyd-Date text-center">
            <p className="font-bold text-sm text-zinc-700">
              Hyderabad, <br></br>29 Sept - 02 Oct
            </p>
          </div>
          <div className="Lotus-Green-Hyd">
            <Image className="w-auto" src={greensquare} alt="greensquare" />
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="mt-2 antialiased font-normal text-base lg:text-2xl eading-8 text-zinc-900">
            PyCon India 2023 is the premier conference for Python enthusiasts
            and professionals, offering an unparalleled opportunity to dive deep
            into the world of Python and explore its limitless potential.
          </p>
          <p className="mt-2 font-light antialiased text-base lg:text-2xl leading-8 text-zinc-900">
            From exciting keynotes and workshops to interactive sessions and
            networking events, this{" "}
            <span className="bg-py-yellow">four-day event</span> promises to be
            an unforgettable experience for anyone interested in the latest
            developments in Python. Join us and be a part of the thriving Python
            community, as we come together to learn, grow, and innovate!
          </p>
        </div>
        <div className="our-call mt-12">
          <div className="green-orna">
            <Image
              className="w-auto lg:w-32 float-right"
              src={ornagreen}
              alt="ornagreen"
            />
          </div>
          <div className="Our-Calls text-center">
            <span className="text-py-blue font-bold text-2xl lg:text-4xl tracking-wide border-dashed border-black border-b-2">
              Our Calls
            </span>
          </div>
          <div className="Yellow-orna">
            <Image
              className="w-auto lg:w-32 float-left"
              src={ornayellow}
              alt="ornayellow"
            />
          </div>
        </div>
        <div className="our-call-grid text-center text-sm mt-8 lg:text-lg">
          <div className="CFV text-xl underline sm:drop-shadow-2xl flex items-center justify-center gap-x-6 border-solid border-4 border-py-green hover:bg-py-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-py-yellow">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
              className=" px-3.5 py-2.5 text-sm font-semibold shadow-sm"
            >
              Call For Volunteers
            </a>
          </div>
          <div className=" text-xl underline flex items-center justify-center gap-x-6 border-solid border-4 border-py-yellow hover:bg-py-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-py-green">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
              className="px-3.5 py-2.5 text-sm font-semibold shadow-sm"
            >
              Call For Proposal
            </a>
          </div>
          <div className="CFCS text-xl underline flex items-center justify-center gap-x-6 border-solid border-4 border-py-green hover:bg-py-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-py-yellow">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
              className="px-3.5 py-2.5 text-sm font-semibold shadow-sm "
            >
              Call For Community Support
            </a>
          </div>
          <div className="CFS text-xl underline flex items-center justify-center gap-x-6 border-solid border-4 border-py-yellow hover:bg-py-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-py-green">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
              className="px-3.5 py-2.5 text-sm font-semibold shadow-sm"
            >
              Call For Sponsorship
            </a>
          </div>
          <div className="CFTI text-xl underline flex items-center justify-center gap-x-6 border-solid border-4 border-py-green hover:bg-py-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-py-yellow">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
              className="px-3.5 py-2.5 text-sm font-semibold shadow-sm "
            >
              Call For Tech Influencer
            </a>
          </div>
          <div className="CFDR text-xl underline flex items-center justify-center gap-x-6 border-solid border-4 border-py-yellow hover:bg-py-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-py-green">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
              className="px-3.5 py-2.5 text-sm font-semibold shadow-sm"
            >
              Call For Diversity Representative
            </a>
          </div>
        </div>
        {/* reusing our call div for Follow Us */}
        <div className="our-call mt-6">
          <div className="green-orna">
            <Image
              className="w-auto lg:w-32 float-right"
              src={ornayellow}
              alt="ornayellow"
            />
          </div>
          <div className="Our-Calls text-center">
            <span className="text-py-blue font-bold text-2xl lg:text-4xl tracking-wide border-dashed border-black border-b-2">
              Follow Us
            </span>
          </div>
          <div className="Yellow-orna">
            <Image
              className="w-auto lg:w-32 float-left"
              src={ornagreen}
              alt="ornagreen"
            />
          </div>
        </div>
        {/* reusing our call grid for follow us links */}
        <div className="follow-us text-center text-white text-sm mt-4 lg:text-lg">
          <div className="MailingList text-xl flex items-center justify-center gap-x-6 border-solid border-4 border-py-yellow rounded-full bg-py-green">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
              className="px-3.5 py-2.5 text-sm font-semibold shadow-sm"
            >
              Mailing List
            </a>
          </div>
          <div className="Twitter text-xl flex items-center justify-center gap-x-6 border-solid border-4 border-py-yellow rounded-full bg-py-green">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
              className="px-3.5 py-2.5 text-sm font-semibold shadow-sm "
            >
              Twitter
            </a>
          </div>
          <div className="LinkedIn text-xl flex items-center justify-center gap-x-6 border-solid border-4 border-py-yellow rounded-full bg-py-green">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
              className="px-3.5 py-2.5 text-sm font-semibold shadow-sm"
            >
              LinkedIn
            </a>
          </div>
          <div className="Instagram text-xl flex items-center justify-center gap-x-6 border-solid border-4 border-py-yellow rounded-full bg-py-green">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
              className="px-3.5 py-2.5 text-sm font-semibold shadow-sm"
            >
              Instagram
            </a>
          </div>
        </div>
        {/* reusing hyd-py date div for stay updated footer */}
        <div className="mt-6 py-hyd grid justify-center flex items-center">
          <div className="Lotus-Yellow-Hyd">
            <Image
              className="w-auto float-right"
              src={yellowsquare}
              alt="yellowsquare"
            />
          </div>
          <div className="Hyd-Date text-center">
            <p className="font-bold text-sm text-zinc-700">
              Stay tuned for more updates!
            </p>
          </div>
          <div className="Lotus-Green-Hyd">
            <Image className="w-auto" src={greensquare} alt="greensquare" />
          </div>
        </div>
      </div>
    </div>
  );
}
