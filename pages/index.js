import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import MainBanner from '@/components/HomeDemo3/MainBanner';
import PartnerStyle2 from '@/components/Common/PartnerStyle2';
import BestAppEver from '@/components/HomeDemo3/BestAppEver';
import Features from '@/components/HomeDemo3/Features';
import IntroVideo from '@/components/Common/IntroVideo';
import PricingPlanStyle3 from '@/components/PricingPlan/PricingPlanStyle3';
import FooterStyleOne from '@/components/_App/FooterStyleOne';
import AppScreenshotsStyle6 from '@/components/AppScreenshots/AppScreenshotsStyle6';
import SphereGeometry from '@/components/threejs/Sphere';

const IndexPage3 = () => {
  return (
    <>
      <NavbarStyleTwo />


      <MainBanner />

      <PartnerStyle2 />

      <BestAppEver />

      <Features />

      <AppScreenshotsStyle6 />


      <div className="section-title">
        <span className="sub-title">========</span>
        <h2>Registration Process</h2>
        <br />
        <span className="sub-title">========</span>
      </div>
      <div className="how-it-works-area ptb-100">
        <div className="container">
          <div className="how-it-works-content">
            <div className="number">1</div>

            <h2>How To Register?</h2>
            <div className="video_content">
              <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/DCw862udnZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">2</div>
            <h2>After Registered?</h2>
            <div className="video_content">
              <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/YBhdvQ1p5xQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">3</div>
            <h2>After Movie 2023</h2>
            <div className="video_content">
              <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/p3fosnqz5OY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterStyleOne />
    </>
  );
};

export default IndexPage3;
