import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from "react-helmet-async";
import SitePrivacyPolicySection from "../components/SitePrivacyPolicySection";

const SitePrivacyPolicyPage = () => {

    return (
        <>

            {/* SEO Meta Tags */}
            <Helmet>
                <title>Privacy Policy | Kissan Growth</title>
                <meta
                    name="description"
                    content="Read Kissan Growth’s Privacy Policy to understand how we collect, use, and safeguard your personal information. Your privacy is important to us."
                />
                <meta
                    name="keywords"
                    content="privacy policy, personal data protection, Kissan Growth, data security, cookies, user privacy, personal information collection, website privacy, legal compliance, third-party sharing, data access rights, email updates, kissan growth farmer app, kissan growth customer app"
                />
                <meta property="og:title" content="Privacy Policy | Kissan Growth" />
                <meta
                    property="og:description"
                    content="Read Kissan Growth’s Privacy Policy to understand how we collect, use, and safeguard your personal information. Your privacy is important to us."
                />
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
            <Breadcrumb title={"Privacy Policy"} />

            <SitePrivacyPolicySection />

            {/* FooterOne */}
            <FooterOne />


        </>
    );
};

export default SitePrivacyPolicyPage;
