import React, { useEffect } from 'react'
import Icons from '../../assets/icons'
import UserBig from '../../assets/images/userbig.png'
import UserBig2 from '../../assets/images/userbig2.png'

const WorkprocessUiController = ({ userdetails }) => {


    return (
        <div id='menu-workprocess-section' className="project-home-item worprocess-section-main">
            <div className="worprocess-section-items">
                <div className="worprocess-section-left">
                    <div className="worprocess-item-title animateY">How we do it?</div>
                    <div className="worprocess-item-desc animateY">{userdetails.workflow1}</div>
                    <div className="worprocess-item-desc animateY">{userdetails.workflow2}</div>
                </div>
                <div className="worprocess-section-right animateY">
                    <div className="worprocess-right-item worprocess-right-item-active">
                        <div className="worprocess-right-item-icon">
                            <i class='bx bx-notepad'></i>
                        </div>
                        <div className="worprocess-right-item-title">1. Research</div>
                        <div className="worprocess-right-item-desc">{userdetails.research}</div>
                    </div>
                    <div className="worprocess-right-item">
                        <div className="worprocess-right-item-icon">
                            <i class='bx bx-line-chart'></i>
                        </div>
                        <div className="worprocess-right-item-title">2. Analyze</div>
                        <div className="worprocess-right-item-desc">{userdetails.analyze}</div>

                    </div>
                    <div className="worprocess-right-item">
                        <div className="worprocess-right-item-icon">
                            <i class='bx bxs-pencil'></i>
                        </div>
                        <div className="worprocess-right-item-title">3. Design</div>
                        <div className="worprocess-right-item-desc">{userdetails.design}</div>
                    </div>
                    <div className="worprocess-right-item">
                        <div className="worprocess-right-item-icon">
                            <i class='bx bx-laptop' ></i>
                        </div>
                        <div className="worprocess-right-item-title">4. Launch</div>
                        <div className="worprocess-right-item-desc">{userdetails.launch}</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default WorkprocessUiController;
