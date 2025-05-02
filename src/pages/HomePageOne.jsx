import React, { Suspense } from "react";
import Preloader from "../helper/Preloader";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";

const HeaderOne = React.lazy(() => import("../components/HeaderOne"));
const BannerOne = React.lazy(() => import("../components/BannerOne"));
// const StaticBanner = React.lazy(() => import("../components/StaticBanner"));
const FeatureOne = React.lazy(() => import("../components/FeatureOne"));
const PromotionalOne = React.lazy(() => import("../components/PromotionalOne"));
const ProductListOne = React.lazy(() => import("../components/ProductListOne"));
const TopVendorsOne = React.lazy(() => import("../components/TopVendorsOne"));
const NewsletterOne = React.lazy(() => import("../components/NewsletterOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const BottomFooter = React.lazy(() => import("../components/BottomFooter"));
const HomeContent = React.lazy(() => import("../components/HomeContent"));
const ShippingOne = React.lazy(() => import("../components/ShippingOne"));
const WhyKissanGrowthCards = React.lazy(() => import("../components/WhyKissanGrowthCards"));
const HowItWorksCards = React.lazy(() => import("./HowItWorksCards"));

const HomePageOne = () => {

  return (
    <>
      <ScrollToTop smooth color="#299E60" />
      <ColorInit color={false} />

      <Suspense fallback={<HeaderOne />}>

        <HeaderOne />
        {/* <StaticBanner /> */}
        <BannerOne />
        <FeatureOne />
        <PromotionalOne />
        <HomeContent />
        <WhyKissanGrowthCards />
        <HowItWorksCards />
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
