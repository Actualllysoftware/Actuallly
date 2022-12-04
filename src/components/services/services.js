import React, { useEffect } from 'react'

const ServicesUiController = ({ userdetails }) => {

    let renderServices = (services) => {
        let parent = document.querySelector('#services-items')

        let makeServiceItem = (service, isActive = false) => {

            let container = document.createElement('div')

            container.classList.add('services-right-item')
            if (isActive) container.classList.add('services-right-item-active')

            container.innerHTML = `
                <div class="services-right-item-icon">${service.icon}</div>
                <div class="services-right-item-title">${service.title}</div>
                <div class="services-right-item-desc">${service.desc}</div>
            `

            return container
        }
        let serviceEvent = (container, service) => {

        }


        if (services && Array.isArray(services)) {
            parent.innerHTML = ``

            for (let i = 0; i < services.length; i++) {
                const service = services[i];

                let container = makeServiceItem(service, (i == 0))
                parent.appendChild(container)
                serviceEvent(container, service)
            }

        }


    }

    useEffect(() => {
        renderServices(userdetails.services)
    }, [])



    return (
        <div id='menu-services-section' className="project-home-item services-section-main">
            <div className="services-section-items">
                <div className="services-section-left">
                    <div className="services-item-title animateY">What we do?</div>
                </div>
                <div className="services-section-right animateY" id='services-items'>
                </div>
            </div>
        </div>

    );
}

export default ServicesUiController;
