import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import Contact from "../components/Contact";
import ScrollToTop from "react-scroll-to-top";
import FooterOne from "../components/FooterOne";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  return (
    <>

      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us: Kissan Growth</title>
        <meta name="description" content="Reach out to Kissan Growth for any inquiries, farmer registration support, or customer assistance. Join India’s #1 farm online marketplace to buy fresh produce." />
        <meta name="keywords" content="Contact Kissan Growth, farmer registration India, support Kissan Growth, local farm marketplace, fresh produce, direct from farmers, customer service Kissan Growth, connect with farmers, farm-to-table, Kissan Growth support, agriculture platform India, organic farm products, fresh vegetables, sustainable farming, India’s #1 farm online marketplace" />
        <meta property="og:title" content="Contact Us: Kissan Growth" />
        <meta property="og:description" content="Reach out to Kissan Growth for any inquiries, farmer registration support, or customer assistance. Join India’s #1 farm online marketplace to buy fresh produce." />
        <meta property="og:keywords" content="Contact Kissan Growth, farmer registration India, support Kissan Growth, local farm marketplace, fresh produce, direct from farmers, customer service Kissan Growth, connect with farmers, farm-to-table, Kissan Growth support, agriculture platform India, organic farm products, fresh vegetables, sustainable farming, India’s #1 farm online marketplace" />
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
      <Breadcrumb title={"Contact"} />

      {/* Contact */}
      <Contact />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default ContactPage;
