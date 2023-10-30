import React from "react";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import Faq from "@/components/Faq/Faq";
import FooterStyleOne from "@/components/_App/FooterStyleOne";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";

const faq = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle1
        pageTitle="FAQ"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ"
      />

      <Faq />

      <FooterStyleOne />
    </>
  );
};

export default faq;