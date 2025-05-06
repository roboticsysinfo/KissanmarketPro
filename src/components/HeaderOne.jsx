import React, { useEffect, useState } from 'react'
import query from 'jquery';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import axiosInstance from '../utils/axiosInstance';
import Select from "react-select";
import { FiLogOut } from "react-icons/fi";
import HeaderSearch from './HeaderSearch';
import googlePlayStoreImg from "../assets/images/google-play-store.svg"
import { FaRegBell } from "react-icons/fa";
import { Badge } from 'react-bootstrap';


const HeaderOne = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [districtOptions, setDistrictOptions] = useState([]); // Store formatted districts
    const [selectedDistrict, setSelectedDistrict] = useState(null); // Selected district


    // useEffect(() => {
    //     fetchDistricts();
    // }, []);

    // const fetchDistricts = async () => {
    //     try {
    //         const response = await axiosInstance.get("/states-cities");

    //         // Extract and format districts properly
    //         const allDistricts = response.data.flatMap(state => state.districts); // Extract districts
    //         const formattedOptions = allDistricts.map(district => ({ value: district, label: district })); // Convert to object

    //         setDistrictOptions(formattedOptions);
    //     } catch (error) {
    //         console.error("Error fetching districts:", error);
    //     }
    // };

    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset < 150) {
                setScroll(false);
            } else if (window.pageYOffset > 150) {
                setScroll(true);
            }
            return () => (window.onscroll = null);
        };
        const selectElement = query('.js-example-basic-single');
        selectElement.select2();

        return () => {
            if (selectElement.data('select2')) {
                selectElement.select2('destroy');
            }
        };

    }, []);


    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;


    const handleLogout = () => {
        localStorage.removeItem('token');  // Remove token
        localStorage.removeItem('userRole');
        localStorage.removeItem('user'); // Remove userRole
        toast.success('Logout Successfully');
        navigate('/login');
    };


    const handleLocation = () => {
        if (selectedDistrict) {
            navigate(`/shops/${selectedDistrict.value}`); // Redirect to URL with selected location
        }
    };


    // Mobile menu support
    const [menuActive, setMenuActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null);
    const handleMenuClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
    };


    // Search control support
    const [activeSearch, setActiveSearch] = useState(false)
    const handleSearchToggle = () => {
        setActiveSearch(!activeSearch);
    };

    return (
        <>
            <div className="overlay" />
            <div className={'side-overlay'} />
            {/* ==================== Search Box Start Here ==================== */}
            <form action="#" className={`search-box ${activeSearch && "active"}`}>
                <button onClick={handleSearchToggle}
                    type="button"
                    className="search-box__close position-absolute inset-block-start-0 inset-inline-end-0 m-16 w-48 h-48 border border-gray-100 rounded-circle flex-center text-white hover-text-gray-800 hover-bg-white text-2xl transition-1"
                >
                    <i className="ph ph-x" />
                </button>
                <div className="container">
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control py-16 px-24 text-xl pe-64"
                            placeholder="Search for a product or brand"
                        />
                        <button
                            type="submit"
                            className="w-48 h-48 bg-main-600 rounded-circle flex-center text-xl text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8"
                        >
                            <i className="ph ph-magnifying-glass" />
                        </button>
                    </div>
                </div>
            </form>
            {/* ==================== Search Box End Here ==================== */}

            {/* ==================== Mobile Menu Start Here ==================== */}
            <div className={`mobile-menu scroll-sm d-lg-none d-block ${menuActive && "active"}`}>
                <button onClick={() => { handleMenuToggle(); setActiveIndex(null) }} type="button" className="close-button">

                    <i className="ph ph-x" />{" "}
                </button>
                <div className="mobile-menu__inner">

                    <Link to="/" className="mobile-menu__logo">
                        <img src="/assets/images/kg-logo.jpg" alt="Logo" />
                    </Link>

                    <div className="mobile-menu__menu">

                        {/* Nav Menu Start */}
                        <ul className="nav-menu flex-align nav-menu--mobile">
                            {/* Home Menu */}

                            <li onClick={() => handleMenuClick(0)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 0 ? "d-block" : ""
                                    }`}
                            >
                                <Link
                                    to="/"
                                    className="nav-menu__link"

                                >
                                    Home
                                </Link>
                            </li>


                            <li onClick={() => handleMenuClick(0)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 0 ? "d-block" : ""
                                    }`}
                            >
                                <Link
                                    to="/about-us"
                                    className="nav-menu__link"

                                >
                                    About Us
                                </Link>
                            </li>


                            <li onClick={() => handleMenuClick(0)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 0 ? "d-block" : ""
                                    }`}
                            >
                                <Link
                                    to="/products"
                                    className="nav-menu__link"

                                >
                                    Products
                                </Link>
                            </li>


                            {/* Farmer Menu */}
                            <li onClick={() => handleMenuClick(1)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 1 ? "d-block" : ""
                                    }`}
                            >

                                <Link
                                    to="/farmers"
                                    className="nav-menu__link"

                                >
                                    Farmers
                                </Link>

                            </li>


                            {/* Shop Menu */}
                            <li onClick={() => handleMenuClick(1)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 1 ? "d-block" : ""
                                    }`}
                            >
                                <Link
                                    to="/shop"
                                    className="nav-menu__link"

                                >
                                    Farmers Shops
                                </Link>
                            </li>


                            {/* Blog Menu */}
                            <li onClick={() => handleMenuClick(3)}
                                className={`on-hover-item nav-menu__item has-submenu ${activeIndex === 3 ? "d-block" : ""
                                    }`}
                            >
                                <Link
                                    to="/blogs"
                                    className="nav-menu__link"

                                >
                                    Blogs
                                </Link>
                            </li>

                            {/* Contact Us Menu */}
                            <li className="nav-menu__item">
                                <Link
                                    to="/contact"
                                    className="nav-menu__link"
                                    onClick={() => setActiveIndex(null)}
                                >
                                    Contact Us
                                </Link>
                            </li>

                        </ul>
                        {/* Nav Menu End */}
                    </div>
                </div>
            </div>
            {/* ==================== Mobile Menu End Here ==================== */}

            {/* ======================= Middle Top Start ========================= */}
            <div className="header-top bg-main-600 flex-between">
                <div className="container container-lg">
                    <div className="flex-between flex-wrap gap-8">
                        <ul className="flex-align flex-wrap d-none d-md-flex">
                            <li className="border-right-item">
                                <Link
                                    to="/farmer/register"
                                    className="text-white text-sm hover-text-decoration-underline"
                                >
                                    Register as Farmer
                                </Link>
                            </li>
                            <li className="border-right-item">
                                <Link
                                    to="/about-us"
                                    className="text-white text-sm hover-text-decoration-underline"
                                >
                                    About us
                                </Link>
                            </li>

                            <li className="border-right-item">
                                <Link>
                                    <div className='header_app'>
                                        <img src={googlePlayStoreImg} alt='Download Farmer App' />
                                        <p>Download Android App for Farmer</p>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link>
                                    <div className='header_app'>
                                        <img src={googlePlayStoreImg} alt='Download Customer App' />
                                        <p>Download Android App for Customer</p>
                                    </div>
                                </Link>
                            </li>

                        </ul>
                        <ul className="header-top__right flex-align flex-wrap">
                            <li className="on-hover-item border-right-item border-right-item-sm-space has-submenu arrow-white">
                                <Link to="/contact" className="text-white text-sm py-8">
                                    Help Center
                                </Link>
                                <ul className="on-hover-dropdown common-dropdown common-dropdown--sm max-h-200 scroll-sm px-0 py-8">
                                    <li className="nav-submenu__item">
                                        <Link
                                            to="/contact"
                                            className="nav-submenu__link hover-bg-gray-100 text-gray-500 text-xs py-6 px-16 flex-align gap-8 rounded-0"
                                        >
                                            <span className="text-sm d-flex">
                                                <i className="ph ph-headset" />
                                            </span>
                                            Call Center
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="border-right-item">
                                <Link
                                    to="/account"
                                    className="text-white text-sm py-8 flex-align gap-6"
                                >
                                    <span className="icon text-md d-flex">
                                        {" "}
                                        <i className="ph ph-user-circle" />{" "}
                                    </span>
                                    <span className="hover-text-decoration-underline">
                                        My Account
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ======================= Middle Top End ========================= */}

            {/* ======================= Middle Header Start ========================= */}
            <header className="header-middle bg-color-one border-bottom border-gray-100">
                <div className="container container-lg">
                    <nav className="header-inner flex-between">
                        {/* Logo Start */}
                        <div className="logo">
                            <Link to="/" className="link">
                                <img src="/assets/images/kg-logo.jpg" alt="Logo" />
                            </Link>
                        </div>
                        {/* Logo End  */}

                        <HeaderSearch />


                        <div className='dflexinpugroup '>

                            {userId ? (
                                <>

                                    <Link to="/notifications">
                                        <div className='notification_bell'>
                                            <FaRegBell />
                                            <Badge pill bg="danger" className="notificatin_badge">
                                                0
                                            </Badge>
                                        </div>
                                    </Link>

                                    <div className='mob_view_user_info'>
                                        <Link to="/account" className="flex-align gap-4 item-hover">
                                            <div class="profile_dropdown">
                                                <img src="https://avatar.iran.liara.run/public/boy" alt="Username" width={38} height={38} />
                                            </div>
                                        </Link>
                                    </div>

                                </>

                            ) : (

                                <div className="mob_view_account_info">
                                    <Link to="/register" className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                        <button className='btn btn-success btn-sm'>Register as a Customer</button>
                                    </Link>
                                </div>

                            )}

                            {userId ? (

                                <>
                                    <div className="mob_view_user_info">

                                        <button className="btn btn-sm btn-danger btn-sm text-center" onClick={handleLogout}><FiLogOut />&ensp;Logout</button>

                                    </div>

                                </>
                            ) : (

                                <div className="mob_view_account_info">

                                    <Link to="/login" className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                        <button className="btn btn-secondary btn-sm text-center" >Customer Login</button>
                                    </Link>

                                </div>


                            )}

                        </div>


                        {/* Header Middle Right start */}
                        <div className="header-right flex-align d-lg-block d-none">
                            <div className="flex-align flex-wrap gap-12">

                                <button
                                    type="button"
                                    className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                                >
                                    <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                                        <i className="ph ph-magnifying-glass" />
                                    </span>
                                </button>

                                {userId ? (
                                    <>

                                        <div className='notification_bell'>
                                            <FaRegBell />
                                            <Badge pill bg="danger" className="notificatin_badge">
                                                0
                                            </Badge>
                                        </div>

                                        <Link to="/account" className="flex-align gap-4 item-hover">
                                            <div class="profile_dropdown">
                                                <img src="https://avatar.iran.liara.run/public/boy" alt="Username" width={38} height={38} />
                                                <h6>{user.name}</h6>
                                            </div>
                                        </Link>

                                    </>

                                ) : (
                                    <Link to="/register" className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                        <button className='btn btn-success'>Register</button>
                                    </Link>
                                )}

                                {userId ? (
                                    <>
                                        <button className="btn btn-sm btn-danger text-center" onClick={handleLogout}><FiLogOut />&ensp;Logout</button>
                                    </>

                                ) : (
                                    <Link to="/login" className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                        <button className="btn btn-secondary text-center" >Login</button>
                                    </Link>
                                )}

                            </div>
                        </div>
                        {/* Header Middle Right End  */}
                    </nav>
                </div >
            </header >
            {/* ======================= Middle Header End ========================= */}

            {/* ==================== Header Start Here ==================== */}
            <header className={`header bg-white border-bottom border-gray-100 ${scroll && "fixed-header"}`}>
                <div className="container container-lg">
                    <nav className="header-inner d-flex justify-content-between gap-8">
                        <div className="flex-align menu-category-wrapper">
                            {/* Category Dropdown Start */}

                            <div className="category on-hover-item">

                                <div className={`responsive-dropdown cat on-hover-dropdown common-dropdown nav-submenu p-0 submenus-submenu-wrapper`}>

                                    {/* Logo Start */}

                                    <div className="logo px-16 d-lg-none d-block">
                                        <Link to="/" className="link">
                                            <img src="/assets/images/kg-logo.jpg" alt="Logo" />
                                        </Link>
                                    </div>

                                    {/* Logo End */}

                                </div>
                            </div>
                            {/* Category Dropdown End  */}
                            {/* Menu Start  */}
                            <div className="header-menu d-lg-block d-none">
                                {/* Nav Menu Start */}
                                <ul className="nav-menu flex-align ">
                                    <li className="on-hover-item nav-menu__item ">
                                        <Link to="/" className="nav-menu__link">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="on-hover-item nav-menu__item ">
                                        <Link to="/products" className="nav-menu__link">
                                            Products
                                        </Link>
                                    </li>
                                    <li className="on-hover-item nav-menu__item ">
                                        <Link to="/farmers" className="nav-menu__link">
                                            Farmers
                                        </Link>
                                    </li>
                                    <li className="on-hover-item nav-menu__item ">
                                        <Link to="/shops" className="nav-menu__link">
                                            Shops
                                        </Link>
                                    </li>
                                    <li className="on-hover-item nav-menu__item ">
                                        <Link to="/blogs" className="nav-menu__link">
                                            Blogs
                                        </Link>
                                    </li>
                                    <li className="nav-menu__item">
                                        <NavLink to="/contact" className={(navData) =>
                                            navData.isActive ? "nav-menu__link activePage" : "nav-menu__link"
                                        }>
                                            Contact Us
                                        </NavLink>
                                    </li>

                                    <li className="on-hover-item nav-menu__item ">
                                        <Link to="/kissan-growth-mobile-apps" className="nav-menu__link">
                                            Kissan Growth Mobile Apps
                                        </Link>
                                    </li>

                                </ul>
                                {/* Nav Menu End */}
                            </div>
                            {/* Menu End  */}
                        </div>
                        {/* Header Right start */}
                        <div className="header-right flex-align">

                            <div className="me-16 d-lg-none d-block">

                                {/* <div className="flex-align flex-wrap gap-12">
                                    <button onClick={handleSearchToggle}
                                        type="button"
                                        className="search-icon flex-align d-lg-none d-flex gap-4 item-hover"
                                    >
                                        <span className="text-2xl text-gray-700 d-flex position-relative item-hover__text">
                                            <i className="ph ph-magnifying-glass" />
                                        </span>
                                    </button>
                                    <Link to="/cart" className="flex-align gap-4 item-hover">
                                        <span className="text-2xl text-gray-700 d-flex position-relative me-6 mt-6 item-hover__text">
                                            <i className="ph ph-shopping-cart-simple" />
                                            <span className="w-16 h-16 flex-center rounded-circle bg-main-600 text-white text-xs position-absolute top-n6 end-n4">
                                                2
                                            </span>
                                        </span>
                                        <span className="text-md text-gray-500 item-hover__text d-none d-lg-flex">
                                            Cart
                                        </span>
                                    </Link>
                                </div> */}

                            </div>

                            <button
                                onClick={handleMenuToggle}
                                type="button"
                                className="toggle-mobileMenu d-lg-none ms-3n text-gray-800 text-4xl d-flex"
                            >
                                {" "}
                                <i className="ph ph-list" />{" "}
                            </button>

                        </div>
                        {/* Header Right End  */}
                    </nav>
                </div>
            </header>
            {/* ==================== Header End Here ==================== */}
        </>

    )
}

export default HeaderOne