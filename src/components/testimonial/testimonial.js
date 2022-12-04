import React, { useEffect } from 'react'

import Icons from '../../assets/icons'
import Project1 from '../../assets/images/project1.png'
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const TestimonialUiController = ({ userdetails }) => {

    let makeClientItem = (proj) => {
        let container = document.createElement('div')
        container.classList.add('client-item', 'animateY')
        container.innerHTML = `
            <div class="client-item-image">
                <img src='${proj.image}' alt="" />
            </div>
        `

        return container
    }
    let makeTestimonialItem = (testimonial) => {
        let container = document.createElement('div')
        container.classList.add('swiper-slide')
        container.innerHTML = `
            <div class="slider-image">
                <div class="testimonial-item-details">
                    <div class="testimonial-item-details-answer animateY">
                        ${testimonial.words}
                    </div>
                    <div class="testimonial-item-details-bottom ">
                        <div class="testimonial-item-details-name animateY">${testimonial.customer}</div>
                        <div class="testimonial-item-details-company animateY">${testimonial.company}</div>
                    </div>
                </div>
            </div>
        `

        return container
    }
    let eventClientItem = (container, proj) => {

    }
    let eventTestimonialItem = (container, proj) => {

    }


    let renderClientsSection = (clients) => {
        let parent = document.querySelector('.client-items-main')


        if (clients && Array.isArray(clients)) {

            parent.innerHTML = ``

            for (let i = 0; i < clients.length; i++) {

                const proj = clients[i];

                let container = makeClientItem(proj)
                parent.appendChild(container)
                eventClientItem(container, proj)

            }
        }

    }

    let renderTestimonialSection = (testimonials) => {
        let parent = document.querySelector('.swiper-wrapper')


        if (testimonials && Array.isArray(testimonials)) {

            parent.innerHTML = ``

            for (let i = 0; i < testimonials.length; i++) {

                const testimonial = testimonials[i];

                let container = makeTestimonialItem(testimonial)
                parent.appendChild(container)
                eventTestimonialItem(container, testimonial)

            }
        }

    }


    useEffect(() => {

        // renderClientsSection(userdetails.clients)
        renderTestimonialSection(userdetails.testimonial)

        const swiper = new Swiper('.swiper-container.two', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                hide: false,
            },
            effect: 'card',
            loop: true,
            centeredSlides: true,
            slidesPerView: 'auto',

        });


    }, [])

    return (

        <div id='menu-testimonial-section' className="project-home-item testimonial-section-main">
            {/* <div className="clients-section-items">
                <div className="testimonial-section-title animateY">Happy Clients</div>
                <div className="testimonial-section-desc animateY">{userdetails.clientdesc}</div>
                <div className="client-items-main">

                </div>
            </div> */}
            <div className="testimonial-section-items">
                <div className="testimonial-section-title animateY">Testimonial</div>
                <div className="testimonial-section-desc animateY">{userdetails.testmonialdesc}</div>
                <div className="testimonial-items-main">
                    <div className="swiper-container two">
                        <div className="swiper-wrapper">
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default TestimonialUiController;
