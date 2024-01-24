import React from "react";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import News from "@/components/News/News";
import FooterStyleOne from "@/components/_App/FooterStyleOne";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";


const news = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle1
        pageTitle="News"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News"
      />

      <News />

      <FooterStyleOne />
    </>
  );
};

export default news;