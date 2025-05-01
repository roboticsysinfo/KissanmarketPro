import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
import Register from "../components/Register"
import FooterOne from "../components/FooterOne";
import { Helmet } from "react-helmet-async";


const RegisterPage = () => {

  return (
    <>

      <Helmet>
        <title>Customer Registration - Join Kissan Growth</title>
        <meta
          name="description"
          content="Sign up on Kissan Growth to become a customer and start shopping directly from the farmers' shops. Enjoy fresh, local produce and support farming."
        />
        <meta
          name="keywords"
          content="Customer registration, Register as customer, Join Kissan Growth, Online grocery shopping, Local farm products, Fresh produce, Shop from farmers, Kissan Growth sign up"
        />
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
      <Breadcrumb title={"Account"} />

      {/* Register */}
      <Register />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterOne */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default RegisterPage;
