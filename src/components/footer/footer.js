import { useState, useEffect } from 'react'
import Icons from '../../assets/icons'
import emailjs from 'emailjs-com'
import Config from '../../config/config'
const FooterUiController = ({ userdetails }) => {

    const [emailSuccess, setEmailSuccess] = useState(false)

    const HeaderItems = [
        {
            id: 'menu-landing-section',
            value: 'Who we are?'
        },
        {
            id: 'menu-services-section',
            value: 'What we do?'
        },
        {
            id: 'menu-workprocess-section',
            value: 'How we do it?'
        },
        {
            id: 'menu-projects-section',
            value: 'Success Stories'
        }
    ]

    const makeFooterLogo = () => {
        let parent = document.querySelector('.footer-bottom-logo')
        parent.innerHTML = Icons.logolight
    }

    let formEventHandler = (id) => {
        let form = document.getElementById(id)
        let inputs = document.getElementById(id).getElementsByTagName('input')

        for (const input of inputs) {
            input.addEventListener('focus', (e) => {
                let label = input.parentElement.querySelector('.footer-right-input-label')
                label.classList.add('form-inputlabel-focused')
                label.style.color = 'var(--primary-color)'
            })
            input.addEventListener('blur', (e) => {

                let value = e.target.value
                let label = input.parentElement.querySelector('.footer-right-input-label')
                label.style.color = 'var(--text-dark-color)'


                if (!value.length) {
                    label.classList.remove('form-inputlabel-focused')
                }

            })
        }


        form.addEventListener('submit', (e) => {
            e.preventDefault()

            let formData = new FormData(e.target)

            let username = formData.get('username')
            let email = formData.get('email')

        })

    }


    const makeHeaderItem = () => {

        let parent = document.querySelector('.footer-bottom-menus')

        let itemEvent = (id, menu) => {

            menu.addEventListener('click', (e) => {
                console.log(id);
            })

        }
        let makeItem = (id, value) => {

            let container = document.createElement('a')
            container.href = `#${id}`
            container.innerHTML = `
        <div class='footer-bottom-menus-itm'>${value}</div>
      `

            itemEvent(id, container)

            return container
        }

        parent.innerHTML = ``

        const Items = HeaderItems;

        Items.forEach((menu, i) => {
            parent.appendChild(makeItem(menu.id, menu.value))
        })

    }


    function sendEmail(e) {

        let EmailPopup = document.querySelector('.email-popup')

        e.preventDefault()

        emailjs.init(Config.USER_ID)
        emailjs.sendForm(Config.SERVICE_ID, Config.TEMPLATE_ID, e.target)
            .then(res => {

                EmailPopup.style.transform = 'translateX(0)'
                setTimeout(() => { EmailPopup.style.transform = 'translateX(50rem)' }, 3000)
                setEmailSuccess(true)
            }).catch(err => console.log(err))

    }




    useEffect(() => {

        makeHeaderItem()
        // makeFooterLogo()
        formEventHandler('footer-discuss-form')
    }, [])
    return (

        <div id='menu-contact-section' className="project-home-item footer-section-main">

            <div className={'email-popup' + (emailSuccess ? ' email-success' : ' email-failed')}>
                {emailSuccess ? ('Email sent successfully🥳!') : ('Email not sent successfully😞!')}
            </div>

            <div className="footer-section-items">
                <div className="footer-discuss-main">
                    <div className="footer-discuss-left">
                        <div className="footer-discuss-left-title animateY">
                            Let’s Transform your business
                            for a change that matters
                        </div>

                        <div className="footer-discuss-left-details animateY">
                            <div className="footer-left-details-item footer-left-details-item-active">
                                <div className="footer-left-details-icon">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <div className="footer-left-details-itm-value">
                                    <div className="footer-left-details-label">Address:</div>
                                    <div className="footer-left-details-value">{userdetails.address}</div>
                                </div>
                            </div>
                            <div className="footer-left-details-item">
                                <div className="footer-left-details-icon">
                                    <i class='bx bxs-envelope'></i>
                                </div>
                                <div className="footer-left-details-itm-value">
                                    <div className="footer-left-details-label">My Email:</div>
                                    <div className="footer-left-details-value">{userdetails.email}</div>
                                </div>
                            </div>
                            <div className="footer-left-details-item">
                                <div className="footer-left-details-icon">
                                    <i class='bx bxs-phone-call' ></i>
                                </div>
                                <div className="footer-left-details-itm-value">
                                    <div className="footer-left-details-label">Calll Me Now:</div>
                                    <div className="footer-left-details-value">{userdetails.phone}</div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-left-social">
                            <div className="footer-left-social-item footer-social-item-active">
                                <a href={userdetails.social.instagram} target='_blank'>
                                    <i class='bx bxl-instagram' ></i>
                                </a>
                            </div>
                            <div className="footer-left-social-item">
                                <a href={userdetails.social.github} target='_blank'>
                                    <i class='bx bxl-github'></i>
                                </a>
                            </div>
                            <div className="footer-left-social-item">
                                <a href={userdetails.social.linkedin} target='_blank'>
                                    <i class='bx bxl-linkedin'></i>
                                </a>
                            </div>
                            <div className="footer-left-social-item">
                                <a href={userdetails.social.gmail} target='_blank'>
                                    <i class='bx bxl-gmail' ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-discuss-right">
                        <form onSubmit={sendEmail} id='footer-discuss-form'>
                            <div className="footer-discuss-right-desc animateY">
                                We have worked with small startups and many businesses, but
                                we only do work that excites us and with people who are as
                                passionate as we are.
                            </div>
                            <div className="footer-discuss-right-inputs animateY">

                                <div className="footer-right-inputs-itm">
                                    <span className='footer-right-input-label'>Name</span>
                                    <input required={true} type="text" name='username' />
                                </div>
                                <div className="footer-right-inputs-itm">
                                    <span className='footer-right-input-label'>Email</span>
                                    <input required={true} type="text" name='email' />
                                </div>
                                <div className="footer-right-inputs-itm">
                                    <span className='footer-right-input-label'>Location</span>
                                    <input required={true} type="text" name='location' />
                                </div>
                                <div className="footer-right-inputs-itm-split">
                                    <div className="footer-right-inputs-itm">
                                        <span className='footer-right-input-label'>Budget</span>
                                        <input type="text" name='budget' />
                                    </div>
                                    <div className="footer-right-inputs-itm">
                                        <span className='footer-right-input-label'>Subject</span>
                                        <input required={true} type="text" name='subject' />
                                    </div>
                                </div>
                                <div className="footer-right-inputs-itm">
                                    <span className='footer-right-input-label'>Message</span>
                                    <input required={true} type="text" name='message' />
                                </div>
                            </div>
                            <div className="footer-discuss-right-submit animateY">
                                <button type='submit' className="footer-discuss-right-submit-btn">
                                    <span>Submit</span>
                                    <i class='bx bx-send'></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom-main">
                    <div className="footer-bottom-logo">
                        <img src={userdetails.logolight} alt="" />
                    </div>
                    <div className="footer-bottom-menus">
                    </div>
                    <div className="footer-bottom-copyright">
                        Copyright © 2022 {userdetails.name}.
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FooterUiController;
