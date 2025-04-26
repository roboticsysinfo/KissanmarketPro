import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
import KGMobileAppsSection from "../components/KGMobileAppsSection";
import { Helmet } from "react-helmet-async";


const KGMobileAppsPage = () => {

  return (

    <>

      {/* SEO Meta Tags */}
      <Helmet>
        <title>Kissan Growth App: India’s #1 Farm Online Marketplace</title>
        <meta
          name="description"
          content="Download Kissan Growth – the leading farm marketplace app in India. Shop fresh fruits, vegetables, crops, and dairy directly from farmers."
        />
        <meta
          name="keywords"
          content="Kissan Growth, farm app India, buy from farmers, fresh produce app, local farm marketplace, organic fruits vegetables India, dairy products online, Indian farmers app, support local farmers, farm-to-table, sustainable farming India, direct from farm, agricultural marketplace, customer farmer app, farm fresh India, no middlemen"
        />
        <meta property="og:title" content="Kissan Growth App: India’s #1 Farm Online Marketplace" />
        <meta
          property="og:description"
          content="Download Kissan Growth – the leading farm marketplace app in India. Shop fresh fruits, vegetables, crops, and dairy directly from farmers."
        />
        <meta property="og:type" content="website" />
      </Helmet>


      {/* Preloader */}
      <Preloader />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* HeaderOne */}
      <HeaderOne />

      <KGMobileAppsSection />

      {/* FooterOne */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default KGMobileAppsPage;