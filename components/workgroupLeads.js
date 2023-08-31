import Link from "next/link";
import WorkgroupLeadsData from "../data/workgroupLeads.yml";
import Paragraph from "./paragraph";
import IconComponent from "./icons";

const WorkgroupLeads = () => {
  const sortedWorkgroupLeadsData = WorkgroupLeadsData.sort((a, b) => {
    // Convert names to uppercase for case-insensitive sorting
    const nameA = a.fullName.toUpperCase();
    const nameB = b.fullName.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="container py-4 justify-center">
      <h1
        className="com-head text-center"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        Workgroup Leads
      </h1>
      <div className="row my-4 text-center">
        <p>
          We are delighted to introduce the dedicated leaders who drive PyCon India 2023 forward. Their unwavering commitment and passion for our community are the driving forces behind our success. Get to know our Workgroup Leads.
        </p>
      </div>
      <div className="row py-4 bg-work-group-leads">
        {sortedWorkgroupLeadsData.map((lead, index) => (
          <div
            className="col-xl-6 col-12"
            data-aos="fade-right"
            data-aos-duration="1000"
            key={index}
          >
            <div className="row workgroup-leads-box bg-white p-3 mb-4 mx-2">
              <div className="col-12 col-md-auto pb-3 text-center">
                <img
                  className="workgroup-leads-image"
                  src={lead.profilePicture}
                  alt={lead.fullName}
                />
              </div>
              <div className="col-12 col-md">
                <div className="text-center text-md-start">
                  <h4>{lead.fullName}</h4>
                  <p>{lead.title}</p>
                  <Paragraph text={lead.about} isHtml={true} numberOfLines={3} />
                  <div className="py-2">
                    {lead.social.map((item, index) =>
                    (
                      <span className="me-2" key={index}>
                        <Link href={item.link} target="_blank">
                          <IconComponent name={item.platform} />
                        </Link>
                      </span>
                    )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkgroupLeads;
