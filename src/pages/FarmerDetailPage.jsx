import React from 'react'
import Preloader from '../helper/Preloader';
import ColorInit from '../helper/ColorInit';
import ScrollToTop from 'react-scroll-to-top';
import HeaderOne from '../components/HeaderOne';
import BreadcrumbTwo from '../components/BreadcrumbTwo';
import FooterOne from '../components/FooterOne';
import BottomFooter from '../components/BottomFooter';
import FarmerDetailSection from '../components/FarmerDetailSection';

const FarmerDetailPage = () => {

    return (
        <>
    
          {/* Preloader */}
          <Preloader />
    
          {/* ColorInit */}
          <ColorInit color={false} />
    
          {/* ScrollToTop */}
          <ScrollToTop smooth color="#299E60" />
    
          {/* HeaderOne */}
          <HeaderOne />
    
          {/* Breadcrumb */}
          <BreadcrumbTwo title={"Farmer Details"} />
    
          {/* Farmer Detail section */}
          <FarmerDetailSection />
    
    
          {/* FooterTwo */}
          <FooterOne />
    
          {/* BottomFooter */}
          <BottomFooter />
    
    
    
        </>
      );
}

export default FarmerDetailPage