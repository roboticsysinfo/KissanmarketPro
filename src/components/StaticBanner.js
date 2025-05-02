import React from 'react'
import staticImageBanner from "../assets/images/farmerbg.webp"

const StaticBanner = () => {
    return (
        <>

            <div className='container-fluid'>
                <div class="row">
                    <div className='col-lg-12 col-xs-12 col-sm-12 p-0'>
                        <img src={staticImageBanner} className="staticbannerimg" alt="Kissan growth"
                            style={{ width: "100%", height: "500px", objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default StaticBanner