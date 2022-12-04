import React, { useEffect } from 'react'

import Icons from '../../assets/icons'
import UserBig from '../../assets/images/userbig.png'
import UserBig2 from '../../assets/images/userbig2.png'

const LandingUiController = ({ userdetails }) => {

    const userDesc = "I'm a Developer and UI/UX Designer based in India. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design."
    const userSocialItems = [
        {
            id: 'linkedin',
            value: 'Linkedin',
            icon: `<i class='bx bxl-linkedin' ></i>`,
            link: userdetails.social.linkedin,
        },
        {
            id: 'github',
            value: 'Linkedin',
            icon: `<i class='bx bxl-github' ></i>`,
            link: userdetails.social.github,
        },
        {
            id: 'instagram',
            value: 'Linkedin',
            icon: `<i class='bx bxl-instagram' ></i>`,
            link: userdetails.social.instagram,
        },
        {
            id: 'gmail',
            value: 'Linkedin',
            icon: `<i class='bx bxl-gmail' ></i>`,
            link: userdetails.social.gmail,
        },
        {
            id: 'whatsapp',
            value: 'Whatsapp',
            icon: `<i class='bx bxl-whatsapp' ></i>`,
            link: userdetails.social.whatsapp,
        },
    ]
    const vectorIcons = [
        `<i class='bx bxl-react' ></i>`,
        `<i class='bx bxl-figma' ></i>`,
        `<i class='bx bxl-python' ></i>`,
    ]

    const makeUserSocialItems = () => {
        let parent = document.querySelector('.home-item-social')

        const makeItem = (itm) => {
            let container = document.createElement('div')
            container.classList.add('user-social-item')
            container.innerHTML = `
                <a target='_blank' id='${itm.id}' href='${itm.link}' >${itm.icon}</a>
            `

            itemEvent(container, itm)
            return container
        }
        const itemEvent = (container, itm) => {

        }

        const Items = userSocialItems

        parent.innerHTML = ``
        Items.forEach(itm => parent.appendChild(makeItem(itm)))

    }

    const makeCharactorItem = () => {
        let icons_parent = document.querySelector('.home-vector-icons')
        let img_parent = document.querySelector('.home-vector-charactor')
        let downlaodcv_parent = document.querySelector('.home-item-downlaodcv')
        let totalk_parent = document.querySelector('.home-item-totalk')

        img_parent.innerHTML = Icons.charactor
        downlaodcv_parent.innerHTML = `
            <span>Download CV<span>
            ${Icons.download}
        `
        totalk_parent.innerHTML = `
            ${Icons.whatsapp}
            <span>Lets Talk<span>
        `

        const makeIconItem = (icon, i) => {
            let container = document.createElement('div')
            container.classList.add('vector-icon')
            container.id = `vector-icon-${i + 1}`
            container.innerHTML = icon
            return container
        }
        icons_parent.innerHTML = ``
        vectorIcons.forEach((itm, i) => icons_parent.appendChild(makeIconItem(itm, i)))
    }

    useEffect(() => {

        // makeUserSocialItems()
        // makeCharactorItem()
    }, [])

    return (

        <div id="menu-landing-section" className="project-home-item landing-section-main">
            <div className="home-gradient-item"></div>
            <div className="home-gradient-item"></div>
            <div className="home-content-items">
                <div className="home-item-left">
                    <div className="home-item-left-details">
                        <div className="home-item-left-title animateY">
                            Let's
                            digitally transform <br />
                            your organization next level
                        </div>
                        <div className="home-item-left-button animateY">
                            <a href="#menu-contact-section"><span>Get a Proposal</span></a>
                        </div>
                    </div>

                </div>
                <div className="home-item-right">
                    <div className="home-item-right-image">
                        <img src={userdetails.fullPhoto} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LandingUiController;
