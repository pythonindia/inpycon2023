import Image from "next/image";
import greensquare from "../public/green-squar.png";
import yellowsquare from "../public/yellow-square.png";
import Mail from "../public/mail.png";
import LinkedIn from "../public/linkedin.png";
import Twitter from "../public/twitter.png";
import Instagram from "../public/instagram.png";
import zulip from "../public/zulip.png";
import Facebook from "../public/facebook.png";
import Logo from "../public/logo.png";

import Footer from "../components/footer";
import Header from "../components/header";
import Journey from "../components/journey";
import HeroBanner from '../components/HeroBanner';
import Speakers from "../components/speakers";
import ConferenceSchedule from "../components/conferenceSchedule";
import Registrations from "../components/registrations";
import PriceTable from "../components/pricetable";
import EventSponsors from "../components/eventSponsors";
import Subscribe from "../components/subscribe";
import ConferenceHall from "../components/conferenceHall";

export default function PyConIndiaWeb() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="keywords" itemProp="keywords" content="PyCon India, PyConIndia, PyConIndia2023, Python, India, PyCon, Conference, Hyderabad, 2023, PyConIn" />
      <meta name="keywords" itemProp="description" content="The premier conference in India on using and developing the python programming language" />
      <meta name="robots" content="index, follow" />
      <title>Pycon India Hyderabad, 2023</title>
      <link rel="icon" type="image/png" href="public/images/favicon.png" />
      <link rel="stylesheet" href="public/css/style.css" />
      <link href="public/css/aos.css" rel="stylesheet" />
      <link href="public/css/font-awesome.min.css" rel="stylesheet" />
      <link
        href="public/css/owl.carousel.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="public/css/owl.theme.default.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link href="public/css/bootstrap.min.css" rel="stylesheet" />
      {/* header section started */}
      <Header/>
      {/* header section ended */}

      {/* banner section started */}
      <HeroBanner/>
      {/* banner section ended */}

      {/* journery section started */}
      <Journey/>
      {/* journery section ended */}

      {/* speakers section started */}
      <Speakers/>
      {/* speakers section ended */}

      {/* conference section started */}
      <ConferenceSchedule/>
      {/* conference section ended*/}
     
      {/* registrations section started */}
      <Registrations/>
      {/* registrations section ended */}
      
      {/* pricetabe section started */}
      <PriceTable/>
      {/* pricetabe section ended */}

      {/* event sponsor section started */}
      <EventSponsors/>
      {/* event sponsor section ended */}

      {/* latest event section started */}
      {/* <section class="bg-latest">
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-md-12">
            <h2 class="com-head">Latest Updates</h2>
          </div> */}
      {/* <div class="col-md-6">
            <iframe style="border:none;" data-tweet-url="https://twitter.com/pyconindia" src="data:text/html;charset=utf-8,%3Ca%20class%3D%22twitter-timeline%22%20href%3D%22https%3A//twitter.com/pyconindia%3Fref_src%3Dtwsrc%255Etfw%22%3ETweets%20by%20pyconindia%3C/a%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"></iframe>
          </div>
          <div class="col-md-6">
            <iframe src="https://www.instagram.com/__pyconindia__/?hl=enembed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
          </div> */}
      {/* </div>
      </div>
    </section> */}
      {/* latest event section ended */}


      {/* subscribe section started */}
      <Subscribe/>
      {/* subscribe section ended */}


      {/* conferecne hall section started */}
        <ConferenceHall/>
      {/* conferecne hall section ended */}
      
      {/* Footer section started */}
      <Footer />
       {/* Footer section ended */}
      {/* bootstrap */}
      {/* animation */}
    </div>
  );
}
