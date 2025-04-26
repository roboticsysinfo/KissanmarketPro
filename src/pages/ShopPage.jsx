import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import ShopSection from "../components/ShopSection";
import FooterOne from "../components/FooterOne";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import ShippingOne from "../components/ShippingOne";
import { Helmet } from "react-helmet-async";

const ShopPage = () => {

  return (
    <>

      {/* SEO Meta Tags */}
      <Helmet>
        <title>Shop Fresh Local Products From Kissan Growth</title>
        <meta name="description" content="Browse and buy fresh, locally sourced products directly from farmers on Kissan Growth. Enjoy high-quality, sustainable produce delivered to your door. Shop now!" />
        <meta name="keywords" content="Fresh local products, Buy direct from farmers, Sustainable produce, Kissan Growth products, Online farm shopping, Shop fresh groceries, Local farm products, Support farmers, Fresh produce delivery" />
        <meta property="og:title" content="Shop Fresh Local Products From Kissan Growth" />
        <meta property="og:description" content="Browse and buy fresh, locally sourced products directly from farmers on Kissan Growth. Enjoy high-quality, sustainable produce delivered to your door. Shop now!" />
        <meta property="og:keywords" content="Fresh local products, Buy direct from farmers, Sustainable produce, Kissan Growth products, Online farm shopping, Shop fresh groceries, Local farm products, Support farmers, Fresh produce delivery" />
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

      {/* ShopSection */}
      <ShopSection />

      {/* Features */}
      <ShippingOne />

      {/* FooterOne */}
      <FooterOne />


    </>
  );
};

export default ShopPage;
