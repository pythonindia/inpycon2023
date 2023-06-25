import { useState, useEffect } from "react";

import Button from "./button";
import Paragraph from "./paragraph";

const TicketsPriceTable = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(
          'https://api.konfhub.com/event/url/pyconindia2023/tickets'
        );
        const data = await response.json();
        // Extract the relevant ticket information from the response
        const extractedTickets = data.ticket_details.map((ticket) => ({
          id: ticket.ticket_id,
          name: ticket.ticket_name,
          price: ticket.ticket_price,
          soldOut: ticket.sold_out,
          description: ticket.description,
        }));
        setTickets(extractedTickets);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };
    fetchTickets();
  }, []);

  return (
    <section className="bg-pricetable home-section">
      <div className="">
        <div className="row pt-5 pb-5" style={{justifyContent: 'center'}}>
          <h2 className="com-head text-white text-center pb-5" data-aos="fade-down" data-aos-duration="1000">Tickets</h2>
          {tickets.map((ticket) => (
            <div key={ticket.id} className="ticket-wrap row">
              <div className="col-md-5 col-sm-8 col-xs-12 px-5">
                <h3 className="ticket-tag">{ticket.name}</h3>
                <Paragraph
                  text={ticket.description}
                  isHtml={true}
                />
              </div>
              <div className="ticket-price col-md-3 col-sm-4 col-xs-12 px-5">
                <h4 className="ticket-tag">{ticket.price} INR</h4>
              </div>
              <div className="ticket-buy col-md-4 col-sm-12 col-xs-12 px-5">
                {ticket.soldOut ?
                  <Button
                    buttonClassName="custom-button grey-btn register-btn-extra-padding w-100"
                    anchorClassName="text-decoration-none text-dark"
                    buttonLabel="Sold Out"
                    buttonHyperLink="#"
                    disabled={true}
                  /> :
                  <Button
                    buttonClassName="custom-button submit-btn register-btn-extra-padding w-100"
                    anchorClassName="text-decoration-none text-light"
                    buttonLabel="Buy Tickets"
                    buttonHyperLink="https://konfhub.com/pyconindia2023#tickets"
                  />}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid p-0 text-center">
        <img src="/2023/images/backgrounds/taj.png" className="img-fluid" alt="" />
      </div>
    </section>
  );
};

export default TicketsPriceTable;
