export const GA_TRACKING_ID = "G-JSVXWCBQ1H";

export const trackPageView = (url) => {
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
    });
};

export const initializeGA = () => {
    if (typeof window !== "undefined") {
        if (!window.gtag) {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function () {
                window.dataLayer.push(arguments);
            };

            window.gtag("js", new Date());
            window.gtag("config", GA_TRACKING_ID);
        }
    }
};
