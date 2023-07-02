import PriceTableData from "../data/pricetable.yml";

const PriceTableSection = () => {
  return (
    <section className="bg-pricetable home-section">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-md-12 pb-5 text-center">
            <h2
              class="com-head text-white pb-md-5"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Tickets Price-table
            </h2>
          </div>
          {PriceTableData.map((item, index) => (
            <div class="col-md-4 mb-md-0 mb-3" key={index}>
              <div class="ticket-card-top  text-center pt-5">
                <h5 class="tickethead pt-2">{item.title}</h5>
                <p class="ticketrate pt-3 mb-0">{item.price}</p>
                <p class="ticketsub"> (Gst Applicable)</p>
                <p class="pt-3 ticketsub">{item.description}</p>
              </div>
              <div class="ticket-card-btm">
                <a href="" class="text-decoration-none">
                  <div></div>
                  <div class="ticket-end">BUY NOW</div>
                </a>
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
