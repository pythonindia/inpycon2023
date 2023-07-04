import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

import lottie from "lottie-web";

import Button from "../components/button";
import animationData from "../public/images/lottie/snake-animation.json";

const NotFoundPage = () => {
  const router = useRouter();
  const animationContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      var animation = lottie.loadAnimation({
        container: animationContainer.current,
        animationData: animationData,
        loop: true,
        autoplay: true,
      });
    }

    return () => {
      animation.destroy();
    };
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <div className="container mt-5">
      <h2 className="com-head text-center">Oops!</h2>
      <h3 className="date-text text-center">
        We couldn&rsquo;t find the page you were looking for.
      </h3>
      <div className="animation-container" ref={animationContainer} />
      <div className="d-flex justify-content-center">
        <Button
          buttonClassName="green-btn register-btn-extra-padding m-2"
          anchorClassName="text-decoration-none text-light"
          buttonLabel="Go Back"
          onClickEvent={goBack}
        />
        <Button
          buttonClassName="submit-btn register-btn-extra-padding m-2"
          anchorClassName="text-decoration-none"
          buttonLabel="Go to Home"
          openInNewTab={false}
          buttonHyperLink="/2023/"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
