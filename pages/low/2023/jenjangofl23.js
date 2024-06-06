import React from "react";
import FooterStyleOne from "@/components/_App/FooterStyleOne";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";

const jenjangofl23 = () => {
  return (
    <>
      <NavbarStyleTwo />
      <PageBannerStyle1
        pageTitle="List of Winners"
        homePageUrl="/low/2023/kategori23"
        homePageText="Previous Page"
        activePageText="Event Level"
      />
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Choose based on the Level of the Offline event you are participating in</h2>
          </div>

          <div className="contact-form">
            <a
              href="https://drive.google.com/file/d/1TkKWdRln2OT2RiQqUFC_8LwmzoxP1g9N/view?usp=sharing"
              target="_blank"
              className="btn default-btn m-3"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              {" "}
              Senior high School{" "}
            </a>
            <a
              href="https://drive.google.com/file/d/145w7g0eyneKZ7oLeo1cVKtMuOF_oEDff/view?usp=sharing"
              target="_blank"
              className="btn default-btn m-3"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              {" "}
              Junior High School{" "}
            </a>
          </div>
        </div>
      </div>
      <FooterStyleOne />
    </>
  );
};

export default jenjangofl23;
