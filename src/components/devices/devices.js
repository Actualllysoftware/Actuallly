import React, { useEffect } from 'react'

import Icons from '../../assets/icons'

const DevicesUiController = ({ userdetails }) => {

    let renderProjectSection = () => {
        let parent = document.querySelector('.devices-banner-img')

        parent.innerHTML = Icons.devicesbanner
    }

    useEffect(() => {


    }, [])

    return (

        <div id='menu-devices-section' className="project-home-item devices-section-main">
            <div className="devices-section-items">
                <div className="devices-section-title">
                    Your dream made a reality, on any platform!
                </div>
                <div className="devices-section-desc">
                    Having built many apps on almost every single platform and device, we can make your dream a reality.
                </div>
                <div className="devices-section-banners">
                    <div className="devices-banner-img">
                        <img src={userdetails.multidevice} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DevicesUiController;
