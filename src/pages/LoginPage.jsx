import React from "react";
import Preloader from "../helper/Preloader";
import Login from "../components/Login"
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
import { Helmet } from "react-helmet-async";


const LoginPage = () => {

  return (
    <>

      <Helmet>
        <title>Kissan Growth Customer Login - Order Directly from Farmers</title>
        <meta
          name="description"
          content="Log in to Kissan Growth to access farmer shops and place your order directly. Enjoy fresh, local produce delivered with ease. Shop now and support farmers!"
        />
        <meta
          name="keywords"
          content="Customer login, Farmer shop order, Fresh produce delivery, Local farm products, Online grocery shopping, Order from farmers, Kissan Growth login"
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

      {/* Account */}
      <Login />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterOne */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default LoginPage;
