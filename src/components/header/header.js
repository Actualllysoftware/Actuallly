import { useState, useEffect } from 'react'

import Icons from '../../assets/icons'

const HeaderUiController = ({ userdetails }) => {

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
    },
    {
      id: 'menu-contact-section',
      value: 'Contact'
    },
  ]
  const MobileHeaderItems = [
    {
      id: 'menu-services-section',
      value: `What we do?`
    },
    {
      id: 'menu-projects-section',
      value: `Success Stories`
    },
    {
      id: 'mobile-toggle-menu',
      value: `<i class='bx bxs-folder-open'></i>`
    },
  ]
  const activeMenuClass = 'menu-item-active'

  const makeHeaderLogo = () => {
    let parent = document.querySelector('.header-logo')
    parent.innerHTML = Icons.logo
  }

  const makeHeaderItem = (type) => {

    let parent = type == 'mobile' ? document.querySelector('.header-menu-items-mobile') : document.querySelector('.header-menu-items');

    let itemEvent = (id, menu) => {

      menu.addEventListener('click', (e) => {
        console.log(id);
      })

    }
    let makeItem = (id, value, isActive = false) => {

      let container = document.createElement('a')
      container.href = `#${id}`
      container.innerHTML = `
        <div class='header-menu-item ${isActive ? activeMenuClass : ''}'>${value}</div>
      `

      itemEvent(id, container)

      return container
    }

    parent.innerHTML = ``

    const Items = type == 'mobile' ? MobileHeaderItems : HeaderItems;

    Items.forEach((menu, i) => {
      parent.appendChild(makeItem(menu.id, menu.value, i == (Items.length - 1)))
    })

  }

  useEffect(() => {
    // makeHeaderLogo()
    makeHeaderItem()
    makeHeaderItem('mobile')
  }, [])

  return (

    <div className="project-header-main">
      <div className="header-items-main">
        <div className="header-logo">
          <img src={userdetails.logo} alt="" />
        </div>
        <div className="header-menu-items">
        </div>
        <div className="header-menu-items-mobile">
        </div>
      </div>
    </div>

  );
}

export default HeaderUiController;
