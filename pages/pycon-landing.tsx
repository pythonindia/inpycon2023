
import Image from 'next/image'
import greensquare from '../public/green-squar.png'
import yellowsquare from '../public/yellow-square.png'
import Banner from './banner';




export default function PyConIndiaWeb() {
    return (
        <div className="bg-white flex flex-row">
            <div className="basis-1/5">
                <div className="flex flex-col divide-y-10 float-left">
                    <div className="h-32 w-32 p-2 m-2">
                        <Image
                          src={yellowsquare}
                          alt="yellowsquare"
                        />
                    </div>
                    <a href='https://www.google.com'>
                      <div className="cen-flex text-center bg-py-green h-32 w-32 p-2 m-2 text-black">Call For Volunteers</div>
                    </a>
                    <a href='https://www.google.com'>
                      <div className="cen-flex text-center bg-py-yellow h-32 w-32 p-2 m-2 text-black">Call For Proposals</div>
                    </a>
                    <a href='https://www.google.com'>
                      <div className="cen-flex text-center bg-py-green h-32 w-32 p-2 m-2 text-black">Call For Community Support</div>
                    </a>
                    <div className="h-32 w-32 p-2 m-2">
                        <Image
                          src={yellowsquare}
                          alt="yellowsquare"
                        />
                    </div>
                </div>
            </div>
            <div className="basis-3/5 self-center">
                <div className="relative py-1 px-3 text-md text-center leading-6 text-lg text-zinc-900">
                    Announcing our premier Python Conference in India.
                </div>
                <div className="sm:mb-8 sm:flex sm:justify-center justify-center text-zinc">
                    <Banner />
                </div>
                <div className="text-center">
                  <p className="font-bold text-xl mt-6 text-zinc-700">Hyderabad, 29 Sept - 02 Oct</p>
                  <p className="mt-6 text-xl leading-8 text-zinc-900">
                    PyCon India 2023 is the premier conference for Python enthusiasts
                    and professionals, offering an unparalleled opportunity to dive deep
                    into the world of Python and explore its limitless potential.
                  </p>
                  <p className="mt-6 text-xl leading-8 text-zinc-900">
                    From exciting keynotes and workshops to interactive sessions and
                    networking events, this <span className='bg-py-yellow'>four-day event</span> promises to be an
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
                      className="rounded-md bg-py-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Become a Volunteer
                    </a>
                  </div>
                </div>
            </div>
            <div className="basis-1/5">
                <div className="flex flex-col float-right">
                    <div className="h-32 w-32 p-2 m-2">
                        <Image
                          src={greensquare}
                          alt="greensquare"
                        />
                    </div>
                    <a href='https://www.google.com'>
                      <div className="cen-flex text-center bg-py-yellow h-32 w-32 p-2 m-2 text-black">Call For Sponsorship</div>
                    </a>
                    <a href='https://www.google.com'>
                      <div className="cen-flex text-center bg-py-green h-32 w-32 p-2 m-2 text-black">Call For Tech Influencer</div>
                    </a>
                    <a href='https://www.google.com'>
                      <div className="cen-flex text-center bg-py-yellow h-32 w-32 p-2 m-2 text-black">Call For Diversity Repersentative</div>
                    </a>
                    <div className="h-32 w-32 p-2 m-2">
                        <Image
                          src={greensquare}
                          alt="greensquare"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}