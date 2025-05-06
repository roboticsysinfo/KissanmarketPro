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
import NotificationSection from "../components/NotificationSection";


const NotificationPage = () => {

    return (
        <>

            {/* SEO Meta Tags */}
            <Helmet>
                <title>Kissan Growth: India’s #1 Farm Online Marketplace</title>
                <meta name="description" content="Kissan Growth, India’s #1 Farm Online Marketplace connecting local farmers and consumers. Buy crops, fresh fruits, vegetables directly from farmers." />
                <meta name="keywords" content="Kissan Growth, fresh produce, buy from farmers, organic fruits and vegetables, local farm marketplace, Indian farmers, dairy products, sustainable farming, support local agriculture, buy direct from farmers, farm fresh food, affordable produce, fair prices, India farm revolution, farm-to-table, no middlemen, India’s #1 Farm Online Marketplace" />
                <meta property="og:title" content="Kissan Growth: India’s #1 Farm Online Marketplace" />
                <meta property="og:description" content="Kissan Growth, India’s #1 Farm Online Marketplace connecting local farmers and consumers. Buy crops, fresh fruits, vegetables directly from farmers." />
                <meta property="og:keywords" content="Kissan Growth, fresh produce, buy from farmers, organic fruits and vegetables, local farm marketplace, Indian farmers, dairy products, sustainable farming, support local agriculture, buy direct from farmers, farm fresh food, affordable produce, fair prices, India farm revolution, farm-to-table, no middlemen, India’s #1 Farm Online Marketplace" />
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
            <Breadcrumb title={"My Notifications"} />

            <NotificationSection />

            {/* FooterTwo */}
            <FooterOne />

            {/* BottomFooter */}
            <BottomFooter />

        </>
    );
};

export default NotificationPage;
