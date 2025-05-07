import React from 'react'
import staticImageBanner from "../assets/images/farmerbg.webp"
import { Link } from 'react-router-dom'

const StaticBanner = () => {
    return (
        <>

            <div className="banner">
                <div className="container container-lg">
                    <div className="banner-item rounded-24 overflow-hidden position-relative arrow-center">
                        <a
                            href="#featureSection"
                            className="scroll-down w-84 h-84 text-center flex-center bg-main-600 rounded-circle border border-5 text-white border-white position-absolute start-50 translate-middle-x bottom-0 hover-bg-main-800"
                        >
                            <span className="icon line-height-0">
                                <i className="ph ph-caret-double-down" />
                            </span>
                        </a>
                        <div className="banner-slider">

                            <div className="banner-slider__item">
                                <div className="banner-slider__inner flex-between position-relative">

                                    <div className="banner-item__content">

                                        <h1 className="banner-item__title bounce mb-10">Fresh & Flavorful Fruits, Every Day!</h1>
                                        <Link
                                            to="/category/fruits-68105ab062837600f93b9c6b"
                                            className="btn btn-main d-inline-flex align-items-center mb-30 rounded-pill gap-8"
                                        >
                                            Explore Shop
                                            <span className="icon text-xl d-flex">
                                                <i className="ph ph-shopping-cart-simple" />
                                            </span>
                                        </Link>

                                    </div>

                                    <div className="banner-item__thumb">
                                        <img src="/assets/images/fruits.webp" alt="Kissan Growth" width={350} height={350} />
                                    </div>

                                </div>
                            </div>



                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default StaticBanner