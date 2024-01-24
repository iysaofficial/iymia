import React from "react";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import News1 from "@/components/News/News1";
import FooterStyleOne from "@/components/_App/FooterStyleOne";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";


const news1 = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle1
        pageTitle="News 2023"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News 2023"
      />

      <News1 />

      <FooterStyleOne />
    </>
  );
};

export default news1;