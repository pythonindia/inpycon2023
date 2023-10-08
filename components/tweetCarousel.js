import React from "react";
// import TweetEmbed from "react-tweet-embed";
import { Tweet } from "react-tweet";

import tweets from "../data/tweets.yml";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import fetchSheetData from "utils/googleSheets";

const sliderSettings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6000,
  cssEase: "linear",
  accessibility: true,
  draggable: true,
  centerMode: true,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TweetCarousel = () => {
  // const [tweets, setTweets] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetchTweets();
  //     setTweets(response);
  //   }
  //   fetchData();

  //   return () => {}

  // }, []);

  return (
    <section className="bg-tweetCarousel home-section">
      <div className="container">
        <div className="row pt-4 pb-2 justify-center">
          <div className="col-12">
            <h2
              className="com-head"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Twitter wall of 💛
            </h2>
            {/* <Slider {...sliderSettings}>
              {tweets.map((tweet) => (
                <div className="light m-2 p-2" key={tweet.tweetID}>
                  <Tweet
                    id={tweet.tweetID}
                    // tweetId={tweet.tweetID}
                    // options={{
                    //   cards: "hidden",
                    //   dnt: true,
                    //   conversation: "none",
                    //   width: 300,
                    // }}
                  />
                </div>
              ))}
            </Slider> */}
            <SliderCSS />
          </div>
        </div>
      </div>
    </section>
  );
};

// const fetchTweets = async () => {
//   try {
//     const sheetId = "1mbY29Kdl9GiH-X0tixz6OzTxJxgU3bF_U13EWxDfxCw";
//     const sheetIndex = 0;
//     let tweetsData = await fetchSheetData(sheetId, sheetIndex);
//     tweetsData = tweetsData
//       .filter((tweet) => tweet.Approved === "TRUE")
//       .map((row) => ({
//         tweetLink: row["Tweet link"],
//         tweetID: row["Tweet ID"],
//       }));
//     return tweetsData;
//   } catch (error) {
//     console.error("Error fetching tweets", error);
//     return [
//       "1709248566903058482",
//       "1708792976850436375",
//       "1708786747465973986",
//     ];
//   }
// };

function SliderCSS() {
  return (
    <div class="slider">
      <div class="slide-track">
        {tweets.map((tweet) => (
          <div class="slide">
            <div className="light m-2 p-2" key={tweet.tweetID}>
              <Tweet id={tweet.tweetID} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TweetCarousel;
