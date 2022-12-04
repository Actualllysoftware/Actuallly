import React, { useEffect } from 'react'

import LandingUiController from './landing/landing'
import AboutUiController from './about/about'
import WorkprocessUiController from './workprocess/workprocess'
import ProjectsUiController from './projects/projects'
import IdeashareUiController from './ideashare/ideashare'
import DevicesUiController from './devices/devices'
import AppdesignuiUiController from './appdesignui/appdesignui'
import ServicesUiController from './services/services'
import TestimonialUiController from './testimonial/testimonial'
import FooterUiController from './footer/footer'


const IndexUiController = ({ userdetails }) => {


    const scrollReveal = () => {

        let home_main = document.querySelector(".project-home-main");
        let revealX = () => {
            let reveals = document.querySelectorAll(".animateX");

            for (let i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let elementTop = reveals[i].getBoundingClientRect().top;

                if (!reveals[i].classList.contains('animateYactive') && elementTop < windowHeight) {
                    reveals[i].classList.add("animateXactive");
                }
            }
        }

        let revealY = () => {
            let reveals = document.querySelectorAll(".animateY");


            for (let i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let elementTop = reveals[i].getBoundingClientRect().top;

                if (!reveals[i].classList.contains('animateYactive') && elementTop < windowHeight) {
                    reveals[i].classList.add("animateYactive");
                }
            }
        }

        home_main.addEventListener("scroll", (e) => {
            revealX()
            revealY()
        });

    }

    useEffect(() => {

        scrollReveal()

    }, [])


    return (

        <div className="project-home-main">
            <LandingUiController userdetails={userdetails} />
            <DevicesUiController userdetails={userdetails} />
            <WorkprocessUiController userdetails={userdetails} />
            <AppdesignuiUiController userdetails={userdetails} />
            <ProjectsUiController userdetails={userdetails} />
            <IdeashareUiController userdetails={userdetails} />
            <ServicesUiController userdetails={userdetails} />
            <TestimonialUiController userdetails={userdetails} />
            <FooterUiController userdetails={userdetails} />
        </div>

    );
}

export default IndexUiController;
