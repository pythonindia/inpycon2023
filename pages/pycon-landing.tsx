import Image from "next/image";
import greensquare from "../public/green-squar.png";
import yellowsquare from "../public/yellow-square.png";
import Mail from "../public/mail.png";
import LinkedIn from "../public/linkedin.png";
import Twitter from "../public/twitter.png";
import Instagram from "../public/instagram.png";
import zulip from "../public/zulip.png";
import Facebook from "../public/facebook.png";
import Logo from '../public/logo.png';

export default function PyConIndiaWeb() {
  return (
    <div className="bg-white flex flex-row ">
      <div className="basis-1/5 flex">
        <div className="flex flex-col divide-y-10 justify-between float-left">
          <div className="h-32 w-32 p-2 m-2">
            <Image src={yellowsquare} alt="yellowsquare" />
          </div>
          <a
            className="drop-shadow-2xl a-trans-gy"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
            target="_blank"
          >
            <div className="cen-flex text-center bg-py-green h-32 w-32 p-2 m-2 text-black">
              Call For Volunteers
            </div>
          </a>
          <a className="drop-shadow-2xl a-trans-yg" href="https://in.pycon.org/cfp/pycon-india-2023/proposals/">
            <div className="cen-flex text-center bg-py-yellow h-32 w-32 p-2 m-2 text-black">
              Call For Proposals
            </div>
          </a>
          <a className="drop-shadow-2xl a-trans-gy" href="#">
            <div className="cen-flex text-center bg-py-green h-32 w-32 p-2 m-2 text-black">
              Call For Community Support
            </div>
          </a>
          <div className="h-32 w-32 p-2 m-2">
            <Image src={yellowsquare} alt="yellowsquare" />
          </div>
        </div>
      </div>
      <div className="basis-3/5 self-center">
      <div className="w-full text-center p-2">
        <p className="text-xs text-gray-300">
          This is a placeholder website. Final version coming soon.
        </p>
      </div>  
        <div className="relative py-1 px-3 text-md text-center leading-6 text-lg text-zinc-900">
          🎉 Announcing 🎉 <br></br>
          Our Premier Python Conference in India
        </div>
        <div className="sm:mb-8 sm:flex sm:justify-center justify-center text-zinc">
          <Image src={Logo} alt="Logo"/>
        </div>
        <div className="text-center">
          <p className="font-bold text-2xl mt-6 text-zinc-700">
            Hyderabad, 29 Sept - 02 Oct
          </p>
          <p className="mt-6 text-xl leading-8 text-zinc-900">
            PyCon India 2023 is the premier conference for Python enthusiasts
            and professionals, offering an unparalleled opportunity to dive deep
            into the world of Python and explore its limitless potential.
          </p>
          <p className="mt-6 text-xl leading-8 text-zinc-900">
            From exciting keynotes and workshops to interactive sessions and
            networking events, this
            <br />
            <span className="bg-py-yellow"><b>four-day event</b></span> promises to be
            an unforgettable experience for anyone interested in the latest
            developments in Python. Join us and be a part of the thriving Python
            community, as we come together to learn, grow, and innovate!
            <br />
            <br />
            Stay tuned for more updates!
          </p>
          <h4 className="mt-10 text-2xl font-bold">Previous Year Editions</h4>
          <div className="flex justify-center mt-4">
            <div className="mx-4">
              <a
                href="https://in.pycon.org/2016"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                PyCon India 2016 - Bangalore
              </a>
            </div>
            <div className="mx-4">
              <a
                href="https://in.pycon.org/2017"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                PyCon India 2017 - Delhi
              </a>
            </div>
            <div className="mx-4">
              <a
                href="https://in.pycon.org/2018"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                PyCon India 2018 - Hyderabad
              </a>
            </div>
            <div className="mx-4">
              <a
                href="https://in.pycon.org/2019"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                PyCon India 2019 - Chennai
              </a>
            </div>
            <div className="mx-4">
              <a
                href="https://in.pycon.org/2020"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                PyCon India 2020 - Online
              </a>
            </div>
            <div className="mx-4">
              <a
                href="https://in.pycon.org/2021"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                PyCon India 2021 - Online
              </a>
            </div>
          </div>
          <div className="mt-10 text-xl flex items-center justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
              className="rounded-md bg-sky-900 px-3.5 py-2.5 text-lg font-semibold text-white shadow-lg hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              target="_blank"
            >
              Become a Volunteer
            </a>
            <div className="w-4"></div>
            <a
              href="https://in.pycon.org/cfp/pycon-india-2023/proposals/"
              className="rounded-md bg-sky-900 px-3.5 py-2.5 text-lg font-semibold text-white shadow-lg hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              target="_blank"
            >
              Submit Proposal
            </a>
          </div>
            <div className="flex items-center justify-center m-8">
              <div className="Social-Link flex flex-row items-center justify-center gap-x-6">
                <div>
                  <a href="https://mail.python.org/mailman/listinfo/inpycon" target="_blank">
                    <Image className="h-12 w-12" src={Mail} alt="Mail" />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/company/pyconindia/" target="_blank">
                    <Image className="h-12 w-12" src={LinkedIn} alt="LinkedIn" />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/pyconindia" target="_blank">
                    <Image className="h-12 w-12" src={Twitter} alt="Twitter" />
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/__pyconindia__/" target="_blank">
                    <Image
                      className="h-12 w-12"
                      src={Instagram}
                      alt="Instagram"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://www.facebook.com/PyConIndia/" target="_blank">
                    <Image className="h-12 w-12" src={Facebook} alt="Facebook" />
                  </a>
                </div>
                <div>
                  <a href="https://pyconindia.zulipchat.com/" target="_blank">
                    <Image
                      className="h-12 w-12 rounded-full"
                      src={zulip}
                      alt="Zulip"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/5 flex justify-end">
          <div className="flex flex-col divide-y-10 justify-between ">
            <div className="h-32 w-32 p-2 m-2">
              <Image src={greensquare} alt="greensquare" />
            </div>
            <a className="drop-shadow-2xl a-trans-yg"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmlVnxDBENiXs17hQeUtgqOZdcsWI7lmQpXq5m9K-e0eS52Q/viewform"
              target="_blank"
            >
              <div className="cen-flex text-center bg-py-yellow h-32 w-32 p-2 m-2 text-black">
                Call For Volunteers
              </div>
            </a>
            <a className="drop-shadow-2xl a-trans-gy" href="https://docs.google.com/forms/d/13MVcj2XEF1DfTmV3fPjq9SN5qzY22k3R7cJVKlfbhZ4/">
              <div className="cen-flex text-center bg-py-green h-32 w-32 p-2 m-2 text-black">
                Call For Sponsors
              </div>
            </a>
            <a className="drop-shadow-2xl a-trans-yg" href="#">
              <div className="cen-flex text-center bg-py-yellow h-32 w-32 p-2 m-2 text-black">
                Call For Diversity Repersentative
              </div>
            </a>
            <div className="h-32 w-32 p-2 m-2">
              <Image src={greensquare} alt="greensquare" />
            </div>
          </div>
        </div>
      </div>
      );
}
