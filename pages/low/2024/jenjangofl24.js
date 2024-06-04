import React from "react";
import FooterStyleOne from "@/components/_App/FooterStyleOne";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";

const jenjangofl24 = () => {
  return (
    <>
      <NavbarStyleTwo />
      <PageBannerStyle1
        pageTitle="List of Winners"
        homePageUrl="/low/2024/kategori24"
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
              href="https://drive.google.com/file/d/1uWIrSTiRG9O8p-J_ueWwjzmpnki-E6i6/view?usp=sharing"
              target="_blank"
              className="btn default-btn m-3"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              {" "}
              University{" "}
            </a>
            <a
              href="https://drive.google.com/file/d/1HRjaSEYohbBrtet2hXN8JdRow2OcwEal/view?usp=sharing"
              target="_blank"
              className="btn default-btn m-3"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              {" "}
              Senior high School{" "}
            </a>
            <a
              href="https://drive.google.com/file/d/14sLJUl6FOM-pn1cyQQmO6razwliKhhFw/view?usp=sharing"
              target="_blank"
              className="btn default-btn m-3"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              {" "}
              Junior High School{" "}
            </a>
            <a
              href="https://drive.google.com/file/d/1kJ9Qw-YWeW29-aGQW5YJDyYJDUGWDbfh/view?usp=sharing"
              target="_blank"
              className="btn default-btn m-3"
              style={{ fontSize: "22px", fontWeight: "bold" }}
            >
              {" "}
              Elementary{" "}
            </a>
          </div>
        </div>
      </div>
      <FooterStyleOne />
    </>
  );
};

export default jenjangofl24;
