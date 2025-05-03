import React, { Suspense } from "react";
import Preloader from "../helper/Preloader";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";

//  Remove Lazy Load for these
import HeaderOne from "../components/HeaderOne";
// import BannerOne from "../components/BannerOne";
import StaticBanner from "../components/StaticBanner"; 

//  Keep Lazy Load for these (for performance)
const FeatureOne = React.lazy(() => import("../components/FeatureOne"));
const PromotionalOne = React.lazy(() => import("../components/PromotionalOne"));
const ProductListOne = React.lazy(() => import("../components/ProductListOne"));
const TopVendorsOne = React.lazy(() => import("../components/TopVendorsOne"));
const NewsletterOne = React.lazy(() => import("../components/NewsletterOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const BottomFooter = React.lazy(() => import("../components/BottomFooter"));
const HomeContent = React.lazy(() => import("../components/HomeContent"));
const ShippingOne = React.lazy(() => import("../components/ShippingOne"));
const WhyKissanGrowthCards = require("../components/WhyKissanGrowthCards").default;
const HowItWorksCards = require("./HowItWorksCards").default;


const HomePageOne = () => {
  return (
    <>
      <ScrollToTop smooth color="#299E60" />
      <ColorInit color={false} />

      <HeaderOne />

      <StaticBanner /> 

      {/* <BannerOne /> */}

      <Suspense fallback={<HeaderOne />}>
      
        <WhyKissanGrowthCards />
        <HowItWorksCards />
        <FeatureOne />
        <PromotionalOne />
        <HomeContent />

        <ProductListOne />
        <TopVendorsOne />
        <ShippingOne />
        <FooterOne />
        <BottomFooter />
      </Suspense>
    </>
  );
};

export default HomePageOne;
