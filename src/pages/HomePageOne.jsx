import React, { Suspense } from "react";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";

// No lazy loading for these (critical content for FCP)
import HeaderOne from "../components/HeaderOne";
import StaticBanner from "../components/StaticBanner";


// Lazy load for non-critical components
const FeatureOne = React.lazy(() => import("../components/FeatureOne"));
const PromotionalOne = React.lazy(() => import("../components/PromotionalOne"));
const ProductListOne = React.lazy(() => import("../components/ProductListOne"));
const TopVendorsOne = React.lazy(() => import("../components/TopVendorsOne"));
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const BottomFooter = React.lazy(() => import("../components/BottomFooter"));
const HomeContent = require("../components/HomeContent").default;
const WhyKissanGrowthCards = require("../components/WhyKissanGrowthCards").default;
const HowItWorksCards = require("./HowItWorksCards").default;


const HomePageOne = () => {
  return (
    <>
      <ScrollToTop smooth color="#299E60" />
      <ColorInit color={false} />

      {/* Critical for initial paint */}
      <HeaderOne />
      <StaticBanner />

      {/* Lazy components rendered individually to avoid full page blocking */}

      <Suspense fallback={<div>Loading Home Content...</div>}>
        <HomeContent />
      </Suspense>

      <Suspense fallback={<div>Loading Why Kissan Growth...</div>}>
        <WhyKissanGrowthCards />
      </Suspense>

      <Suspense fallback={<div>Loading How it Works...</div>}>
        <HowItWorksCards />
      </Suspense>

      <Suspense fallback={<div>Loading Features...</div>}>
        <FeatureOne />
      </Suspense>

      <Suspense fallback={<div>Loading Promotions...</div>}>
        <PromotionalOne />
      </Suspense>


      <Suspense fallback={<div>Loading Products...</div>}>
        <ProductListOne />
      </Suspense>

      <Suspense fallback={<div>Loading Top Vendors...</div>}>
        <TopVendorsOne />
      </Suspense>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <FooterOne />
      </Suspense>

      <Suspense fallback={<div>Loading Bottom Footer...</div>}>
        <BottomFooter />
      </Suspense>
    </>
  );
};

export default HomePageOne;
