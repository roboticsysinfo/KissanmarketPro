import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from "react-helmet-async";
import SiteTermsConditionsSection from "../components/SiteTermsConditionsSection";

const SiteTermsConditionsPage = () => {

  return (
    <>

      {/* SEO Meta Tags */}
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Terms and Conditions - Kissan Growth</title>
        <meta
          name="description"
          content="Explore Kissan Growth's terms and conditions for website usage. Understand your rights, privacy, cookies, and third-party services while using our platform."
        />
        <meta
          name="keywords"
          content="Kissan Growth Terms and Conditions, website terms, legal agreement, privacy policy, cookies usage, intellectual property, third-party services, website usage rules, legal terms, Robotic Sysinfo, India’s #1 Farm Online Marketplace, kissan growth farmer app, kissan growth customer app"
        />
        <meta property="og:title" content="Terms and Conditions - Kissan Growth" />
        <meta
          property="og:description"
          content="Explore Kissan Growth's terms and conditions for website usage. Understand your rights, privacy, cookies, and third-party services while using our platform."
        />
        <meta property="og:keywords" content="Kissan Growth Terms and Conditions, website terms, legal agreement, privacy policy, cookies usage, intellectual property, third-party services, website usage rules, legal terms, Robotic Sysinfo, India’s #1 Farm Online Marketplace, kissan growth farmer app, kissan growth customer app" />
        <meta property="og:type" content="website" />
      </Helmet>



      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Terms & Conditions"} />

      <SiteTermsConditionsSection />

      {/* FooterOne */}
      <FooterOne />


    </>
  );
};

export default SiteTermsConditionsPage;
