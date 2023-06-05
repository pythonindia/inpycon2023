import React from 'react';
import Image from "next/image";
const PriceTable: React.FC  = ()=>{
    return (
        <section className="bg-pricetable">
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-md-12 pb-5 text-center">
              <h2 className="com-head text-white pb-5">Tickets Price-table</h2>
            </div>
            <div className="col-md-4">
              <div className="ticket-card mb-md-0 mb-3 text-center pt-5">
                <h5 className="tickethead pt-2">Early Bird Ticket</h5>
                <p className="ticketrate pt-3 mb-0">INR 1200</p>
                <p className="ticketsub"> (Gst Applicable)</p>
                <p className="pt-3 ticketsub">
                  Conference ticket for 29 sept - 02
                </p>
                <div className="ticket-end">BUY NOW</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ticket-card mb-md-0 mb-3 text-center pt-5">
                <h5 className="tickethead pt-2">Student Ticket</h5>
                <p className="ticketrate pt-3 mb-0">INR 1200</p>
                <p className="ticketsub"> (Gst Applicable)</p>
                <p className="pt-3 ticketsub">
                  Conference ticket for 29 sept - 02
                </p>
                <div className="ticket-end">BUY NOW</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ticket-card mb-md-0 mb-3 text-center pt-5">
                <h5 className="tickethead pt-2">Regular Ticket</h5>
                <p className="ticketrate pt-3 mb-0">INR 1200</p>
                <p className="ticketsub"> (Gst Applicable)</p>
                <p className="pt-3 ticketsub">
                  Conference ticket for 29 sept - 02
                </p>
                <div className="ticket-end">BUY NOW</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 text-center">
          <img src="public/images/taj.png" className="img-fluid" />
        </div>
      </section>
    )
}
export default PriceTable;