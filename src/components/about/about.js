import React, { useEffect } from 'react'
import Icons from '../../assets/icons'
import UserBig from '../../assets/images/userbig.png'
import UserBig2 from '../../assets/images/userbig2.png'

const HomeUiController = ({ userdetails }) => {


    return (
        <div className="project-home-item about-section-main">
            <div className="home-about-section">
                <div className="about-section-left">
                    <div className="about-left-image">
                        <img src={userdetails.fullPhoto} alt="" />
                    </div>
                    <div className="about-left-social">
                        <div className="about-left-social-item">
                            <a href={userdetails.social.instagram} target='_blank'>
                                <i class='bx bxl-instagram' ></i>
                            </a>
                        </div>
                        <div className="about-left-social-item">
                            <a href={userdetails.social.github} target='_blank'>
                                <i class='bx bxl-github'></i>
                            </a>
                        </div>
                        <div className="about-left-social-item about-social-item-active">
                            <a href={userdetails.social.linkedin} target='_blank'>

                                <i class='bx bxl-linkedin'></i>
                            </a>
                        </div>
                        <div className="about-left-social-item">
                            <a href={userdetails.social.gmail} target='_blank'>
                                <i class='bx bxl-gmail' ></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="about-section-right">
                    <div className="about-right-title animateY">
                        I am Professiona User Expireance Developer
                    </div>
                    <div className="about-right-desc animateY">{userdetails.about}</div>
                    <div className="about-right-desc animateY">{userdetails.userdesc}</div>
                    <div className="about-right-buttons animateX">
                        <div className="about-right-btn">My Project</div>
                        <div className="about-right-btn">
                            <a href={userdetails.resume} download={true}>Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HomeUiController;
