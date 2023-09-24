import Footer from "../components/footer";
import Header from "../components/header";
import HeroBanner from "../components/HeroBanner";
import JourneyComponent from "../components/journey";
import SponsorComponent from "../components/sponsor";
import CommunityPartners from "../components/communityPartners";
import ConventionCenterSection from "../components/conventioncenter";
import SubscribeSection from "../components/subscribe";
import RegistrationSection from "../components/registration";
import Partners from "components/partners";
import LocalUserGroupsChapters from "components/localUserGroups";

export default function PyConIndiaWeb() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <JourneyComponent />
      <RegistrationSection />
      <SponsorComponent />
      <CommunityPartners />
      <Partners/>
      <LocalUserGroupsChapters />
      {/* <section className="bg-latest">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-12">
            <h2 className="com-head">Latest Updates</h2>
          </div>
      <div className="col-md-6">
      <iframe
      style={{ border: 'none' }}
      data-tweet-url="https://twitter.com/pyconindia"
      src="data:text/html;charset=utf-8,%3Ca%20class%3D%22twitter-timeline%22%20href%3D%22https%3A//twitter.com/pyconindia%3Fref_src%3Dtwsrc%255Etfw%22%3ETweets%20by%20pyconindia%3C/a%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"
    ></iframe>          </div>
          <div className="col-md-6">
            <iframe src="https://www.instagram.com/__pyconindia__/?hl=enembed" width="400" height="480" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>
          </div>
      </div>
      </div>
    </section> */}
      {/* <SubscribeSection /> */}
      <ConventionCenterSection />
      <Footer />
    </div>
  );
}
