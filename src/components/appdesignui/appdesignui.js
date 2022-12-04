import React, { useEffect } from 'react'
import Icons from '../../assets/icons'
import UserBig from '../../assets/images/userbig.png'
import UserBig2 from '../../assets/images/userbig2.png'

const AppdesignuiUiController = ({ userdetails }) => {

    let makeDesignItem = (design, isActive = false) => {
        let container = document.createElement('div')
        container.classList.add('appdesignui-right-item')
        if (isActive) container.classList.add('appdesignui-item-active')

        container.innerHTML = `
            <img src=${design.image} alt="" />
        `

        return container
    }

    let renderDesignsItems = (designs) => {
        let parent = document.querySelector('.appdesignui-section-right')

        if (designs && Array.isArray(designs)) {

            parent.innerHTML = ``

            designs.forEach((design, i) => {

                let item = makeDesignItem(design, i == 0)
                parent.appendChild(item)
            })
        }

    }

    let renderPagginationEvent = (designs) => {
        let parent = document.querySelector('.appdesignui-section-right')
        let status_bar = document.querySelector('#appdesignui-status-bar')
        let previous_btn = document.querySelector('#appdesignui-previous-btn')
        let next_btn = document.querySelector('#appdesignui-next-btn')

        let currentIndex = 0;
        let total_index = designs.length - 1
        let status_perc = (100 / (total_index + 1))
        status_bar.style.width = `${status_perc}%`

        let reset = () => {

            for (const itm of parent.children) itm.classList.remove('appdesignui-item-active')
        }

        next_btn.addEventListener('click', (e) => {
            reset()

            let next_index = total_index < currentIndex + 1 ? 0 : currentIndex + 1


            status_bar.style.left = `${status_perc * currentIndex}%`

            parent.children[next_index].classList.add('appdesignui-item-active')

            if (total_index < currentIndex + 1) currentIndex = 0;
            else currentIndex++;
        })

        previous_btn.addEventListener('click', (e) => {
            reset()

            let prev_index = 0 <= (currentIndex - 1) ? currentIndex - 1 : total_index

            status_bar.style.left = `${status_perc * currentIndex}%`

            parent.children[prev_index].classList.add('appdesignui-item-active')

            if (0 > (currentIndex - 1)) currentIndex = total_index;
            else currentIndex--;
        })

    }

    useEffect(() => {

        renderDesignsItems(userdetails.appdesigns)
        renderPagginationEvent(userdetails.appdesigns)
    }, [])


    return (
        <div id='menu-appdesignui-section' className="project-home-item appdesignui-section-main">
            <div className="appdesignui-section-items">
                <div className="appdesignui-section-left">
                    <div className="appdesignui-item-title animateY">Your Product Look like</div>
                    <div className="appdesignui-item-desc animateY">{userdetails.workflow1}</div>
                    <div className="appdesignui-item-desc animateY">Reference are listed checkout!</div>
                    <div className="appdesignui-item-buttons">
                        <div className='appdesignui-item-btn item-btn-previous' id='appdesignui-previous-btn'>
                            <i class='bx bx-chevron-left'></i>
                        </div>
                        <div className='appdesignui-item-status'>
                            <div className='appdesignui-status-bar' id='appdesignui-status-bar'></div>
                        </div>
                        <div className='appdesignui-item-btn item-btn-next' id='appdesignui-next-btn'>
                            <i class='bx bx-chevron-right' ></i>
                        </div>
                    </div>
                </div>
                <div className="appdesignui-section-right animateY">

                </div>
            </div>
        </div>

    );
}

export default AppdesignuiUiController;
