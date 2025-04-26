import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import ShippingOne from "../components/ShippingOne";
import FooterOne from "../components/FooterOne";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import VendorSection from "../components/VendorSection";
import { Helmet } from "react-helmet-async";


const VendorPage = () => {

  return (
    <>

      {/* SEO Meta Tags */}
      <Helmet>
        <title>Shop Fresh Farm Products: Kissan Growth</title>
        <meta name="description" content="Discover a wide range of farm-fresh, locally grown product shops on Kissan Growth. Buy directly from trusted farmers to your doorstep." />
        <meta name="keywords" content="Farm-fresh produce, Local organic products, Farmer direct shopping, Natural groceries, Buy fresh online, Healthy local foods, Farm to table delivery, Kissan Growth store, Fresh from the farm" />
        <meta property="og:title" content="Shop Fresh Farm Products: Kissan Growth" />
        <meta property="og:description" content="Discover a wide range of farm-fresh, locally grown product shops on Kissan Growth. Buy directly from trusted farmers to your doorstep." />
        <meta property="og:keywords" content="Farm-fresh produce, Local organic products, Farmer direct shopping, Natural groceries, Buy fresh online, Healthy local foods, Farm to table delivery, Kissan Growth store, Fresh from the farm" />
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
      <Breadcrumb title={"Shop"} />

      {/* VendorSection */}
      <VendorSection />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterOne */}
      <FooterOne />


    </>
  );
};

export default VendorPage;
