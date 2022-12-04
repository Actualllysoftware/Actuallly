import React, { useEffect } from 'react'

import Icons from '../../assets/icons'
import Project1 from '../../assets/images/project1.png'

const ProjectsUiController = ({ userdetails }) => {

    const projectviewcount = 5;

    let makeProjectItem = (proj) => {
        let container = document.createElement('div')
        container.classList.add('project-item', 'animateY')
        container.innerHTML = `
            <div class="project-item-image">
                <img src='${proj.image}' alt="" />
            </div>
            <div class="project-item-details">
                <div class="project-item-category">${proj.category}</div>
                <div class="project-item-title">${proj.name}</div>
                <div class="project-item-desc">${proj.description}</div>
                <div class="project-item-buttons" style='display: none;'>
                    <a href='${proj.link}' target='_blank'>
                        <div class="project-item-btn">
                            <span>View Live</span>
                            <i class='bx bx-right-arrow-alt'></i>
                        </div>
                    </a>
                </div>
            </div>
        `

        return container
    }
    let eventProjectItem = (container, proj) => {

    }

    let renderProjectSection = (projects) => {
        let parent = document.querySelector('.project-items-main')


        if (projects && Array.isArray(projects)) {

            parent.innerHTML = ``

            for (let i = 0; i < projects.length; i++) {

                if (i > projectviewcount) break;

                const proj = projects[i];

                let container = makeProjectItem(proj)
                parent.appendChild(container)
                eventProjectItem(container, proj)

            }
        }

    }


    useEffect(() => {

        renderProjectSection(userdetails.projects)

    }, [])

    return (

        <div id='menu-projects-section' className="project-home-item projects-section-main">
            <div className="project-section-items">
                <div className="project-section-title animateY">Success Stories</div>
                <div className="project-section-desc animateY">{userdetails.projectdesc}</div>
                <div className="project-items-main">
                </div>
                <div className="project-items-more animateY">
                    <div className="project-item-btn">
                        More Project
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProjectsUiController;
