import React from "react";
import FooterStyleOne from "@/components/_App/FooterStyleOne";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";

const lowtahun = () => {
  return (
    <>
      <NavbarStyleTwo />
      <PageBannerStyle1
        pageTitle="List of Winners"
        homePageUrl="/"
        homePageText="Home"
        activePageText="List of Winners"
      />
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Select by the year of the event you are participating in</h2>
          </div>

          <div className="contact-form">
            <a
              href="/low/2024/kategori24"
              className="btn default-btn m-3"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              {" "}
              2024{" "}
            </a>
            <a
              href="https://drive.google.com/file/d/1BCujrVobYZaZVmPru5HujhD_Jr3P7XtC/view?usp=drive_link"
              target="_blank"
              className="btn default-btn m-3"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              {" "}
              2023{" "}
            </a>
          </div>
        </div>
      </div>
      <FooterStyleOne />
    </>
  );
};

export default lowtahun;
