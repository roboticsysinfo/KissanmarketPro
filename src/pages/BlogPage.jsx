import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import BottomFooter from "../components/BottomFooter";
import Blog from "../components/Blog";
import ScrollToTop from "react-scroll-to-top";
import FooterOne from "../components/FooterOne";
import { Helmet } from "react-helmet-async";


const BlogPage = () => {

  return (
    <>

      {/* SEO Meta Tags */}
      <Helmet>
        <title>Kissan Growth Blogs: Farming Tips & Agri-Tech News</title>
        <meta name="description" content="Explore Kissan Growth's blog for expert articles on digital marketing, farm-to-market strategies, and the latest in agricultural technology." />
        <meta name="keywords" content="Kissan Growth, agriculture blog, farming tips, farmer blog India, digital farming, agri marketing, farm to market, agricultural technology, smart farming, agri tech India, marketing for farmers, sell produce online, Indian farmers blog, Karnal farming, farm growth strategies" />
        <meta property="og:title" content="Kissan Growth Blogs: Farming Tips & Agri-Tech News" />
        <meta property="og:description" content="Explore Kissan Growth's blog for expert articles on digital marketing, farm-to-market strategies, and the latest in agricultural technology." />
        <meta property="og:keywords" content="Kissan Growth, agriculture blog, farming tips, farmer blog India, digital farming, agri marketing, farm to market, agricultural technology, smart farming, agri tech India, marketing for farmers, sell produce online, Indian farmers blog, Karnal farming, farm growth strategies" />
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
      <Breadcrumb title={"Blogs"} />

      {/* Blog */}
      <Blog />

      {/* FooterTwo */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />

    </>
  );
};

export default BlogPage;
