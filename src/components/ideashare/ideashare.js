import React, { useEffect } from 'react'

import Icons from '../../assets/icons'
import Project1 from '../../assets/images/project1.png'

const IdeashareUiController = () => {

    return (

        <div className="project-home-item ideashare-section-main">
            <div className="ideashare-section-items">
                <div className="ideashare-section-title animateY">
                    Do you have Project Idea? <br />
                    Let's discuss your project!
                </div>
                <div className="ideashare-section-desc animateY">
                    We are very selective about who we work or partner with. We have worked with small startups <br />
                    and many businesses, but we only do work that excites us and with people who are as <br />
                    passionate as we are.
                </div>
                <div className="ideashare-section-buttons animateY">
                    <a href="#menu-contact-section">
                        <div className="ideashare-section-btn">
                            <span>Let’s work Together</span>
                            <i class='bx bx-right-arrow-alt'></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default IdeashareUiController;
