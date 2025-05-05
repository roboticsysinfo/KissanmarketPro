import React from 'react'
import Preloader from '../helper/Preloader';
import ColorInit from '../helper/ColorInit';
import ScrollToTop from 'react-scroll-to-top';
import HeaderOne from '../components/HeaderOne';
import BreadcrumbTwo from '../components/BreadcrumbTwo';
import FooterOne from '../components/FooterOne';
import BottomFooter from '../components/BottomFooter';
import ShopReview from '../components/ShopReview';
import ShopDetailsScreen from '../components/ShopDetailsSection';

const ShopDetailsPage = () => {

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
          <BreadcrumbTwo title={"Shop Details"} />
    
          {/* Shop Detail section */}
          <ShopDetailsScreen />
    
          {/* Review Sectino */}
          <ShopReview />
    
          {/* FooterTwo */}
          <FooterOne />
    
          {/* BottomFooter */}
          <BottomFooter />
    
    
    
        </>
      );
}

export default ShopDetailsPage