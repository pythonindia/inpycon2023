import faqData from './faq.yaml';



const faqPage = () => {
  const faqs: Array<{
      question: string;
      answer: string;
    }> = faqData.faqs;

  return (
    <div className='text-center'>
    <h1 className="text-5xl my-16">Frequently Asked Questions</h1>
    {faqs.map((faq, index) => (
      <div key={index} className='my-5'>
        <h2 className='text-3xl'>{faq.question}</h2>
        <p>{faq.answer}</p>
        <hr/>
      </div>
    ))}
    </div>
  );
};

export default faqPage;
