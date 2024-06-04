import React from "react";
import FooterStyleOne from "@/components/_App/FooterStyleOne";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";

const kategori24 = () => {
  return (
    <>
      <NavbarStyleTwo />
      <PageBannerStyle1
        pageTitle="List of Winners"
        homePageUrl="/low/lowtahun"
        homePageText="Previous Page"
        activePageText="Event Category"
      />
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Choose based on the Category of the event you are participating in</h2>
          </div>

          <div className="contact-form">
            <a
              href="https://drive.google.com/file/d/1miVCuWnlWlCai9h89ByoVYJJXR0d830K/view?usp=sharing"
              target="_blank"
              className="btn default-btn m-3"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              {" "}
              Special Award{" "}
            </a>
            <a
              href="/low/2024/jenjangofl24"
              className="btn default-btn m-3"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              {" "}
              IYMIA OFFLINE{" "}
            </a>
            <a
              href="/low/2024/jenjangonl24"
              className="btn default-btn m-3"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              {" "}
              IYMIA ONLINE{" "}
            </a>
          </div>
        </div>
      </div>
      <FooterStyleOne />
    </>
  );
};

export default kategori24;