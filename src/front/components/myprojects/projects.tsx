import * as React from "react"
import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome/index";
import { faHome } from "../../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import "../../style/my-projects.scss"
import { projects } from "../../utils/projects"
import ProjectGrid from "./project-grid";
import ProjectCarousel from "./project-carousel";
import { pageContext } from "../../utils/context/ProjectContext"
import { setModal } from "../../utils/jquery/carousel"
import ProjectView from "./project-view";
import {scrollContext} from "../../utils/context/ProjectContext"
const Projects: React.SFC<IProjectsProps> = (props) => {
    const {scroll, setScroll} = useContext(scrollContext)
    const [num, setNum] = useState(0)
    const [toggelCarousel, setToggel] = useState(false)
    let modal
    let head

    setModal(num,scroll,setScroll)

    if (toggelCarousel) {
        modal = <>
            <ProjectCarousel projects={projects} />
            {projects.map(project => {
                return <ProjectView key={project.id} project={project} />
            })}
        </>
        head = <></>
    } else {
        modal = <></>
        head = <>
            <div className="title" >
                <span className="page-title" data-text="[My_Projects]">[My_Projects]</span>
            </div>
            <Link className="home-link" to="/"><FontAwesomeIcon icon={faHome} /></Link>
        </>
    }
    return (
        <>
            <pageContext.Provider value={{ num, setNum, setToggel }}>
                <div className="head">
                    {head}
                </div>
                <div className="projects-container">
                    <ProjectGrid projects={projects} />
                    {modal}
                </div>

            </pageContext.Provider>
        </>
    )
}

interface IProjectsProps {

}

export default Projects