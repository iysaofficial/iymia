import React from "react";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import News2 from "@/components/News/News2";
import FooterStyleOne from "@/components/_App/FooterStyleOne";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";


const news2 = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle1
        pageTitle="News 2023"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News 2023"
      />

      <News2 />

      <FooterStyleOne />
    </>
  );
};

export default news2;