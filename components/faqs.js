import faq_data from "../data/faqs.yml";

export default function Faqs() {
  return (
    <div>
      <div className="flex justify-center w-full m-5">
        <h1><b>Frequently asked questions</b></h1>
      </div>
      <div className="flex justify-center w-full m-3 lg:m-5">
        <div className="flex flex-col">
          {(faq_data.faqs).map((faq, index) => (
            <div className="flex flex-col w-full m-5" key={index}>
              <div className="flex flex-row w-full">
                <div className="flex flex-col">
                  <h2><b>Q. {faq.question}</b></h2>
                </div>
                <div className="flex flex-col">
                  <h3>{faq.answer}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
