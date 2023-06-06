import PriceTableData from "../data/pricetable.yml";

const PriceTableSection = () => {
  return (
    <section className="bg-pricetable">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-12 pb-5 text-center">
            <h2 className="com-head text-white pb-5">Tickets Price-table</h2>
          </div>
          {PriceTableData.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="ticket-card mb-md-0 mb-3 text-center pt-5">
                <h5 className="tickethead pt-2">{item.title}</h5>
                <p className="ticketrate pt-3 mb-0">{item.price}</p>
                <p className="ticketsub">(Gst Applicable)</p>
                <p className="pt-3 ticketsub">{item.description}</p>
                <div className="ticket-end">BUY NOW</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid p-0 text-center">
        <img src="images/taj.png" className="img-fluid" alt="" />
      </div>
    </section>
  );
};

export default PriceTableSection;
