import Footer from "../components/footer";
import Header from "../components/header";
import HeroBanner from "../components/HeroBanner";
import JourneyComponent from "../components/journey";
import KeynoteComponent from "../components/keynote";
import SponsorComponent from "../components/sponsor";
import CommunityPartners from "../components/communityPartners";
import ConventionCenterSection from "../components/conventioncenter";
import SubscribeSection from "../components/subscribe";
import PriceTableSection from "../components/pricetable";
import RegistrationSection from "../components/registration";
import ConferenceSchedule from "../components/schedule";

export default function PyConIndiaWeb() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <JourneyComponent />
      <KeynoteComponent />
      {/* <ConferenceSchedule /> */}
      <RegistrationSection />
      {/* <PriceTableSection /> */}
      <SponsorComponent />
      <CommunityPartners />
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
      {/* <SubscribeSection /> */}
      {/* subscribe section ended */}
      <ConventionCenterSection />
      <Footer />
      {/* bootstrap */}
      {/* animation */}
    </div>
  );
}
