import * as React from "react"
import { useContext } from "react"
import { pageContext } from "../../utils/context/ProjectContext"
import "../../style/project-grid.scss"
import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome/index";
import { faCode, faGlobeAmericas } from "../../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faCheckCircle } from "../../../../node_modules/@fortawesome/free-regular-svg-icons/index";
import { IProject } from "../../utils/projects"

const ProjectGrid: React.SFC<IProjectGrid> = (props) => {

    let {setNum, setToggel} = useContext(pageContext)

    function prepModal(val: number) {
        setNum(val);
        setToggel(true)
    }
    return (
        <>
            <div className="project-grid">
                {props.projects.map(project => {
                    return (
                        <div onClick={() => prepModal(project.id)} id={`${project.id}`} key={project.id} className="project-item">
                            <h1>{project.title}</h1>
                            <div className="project-details">
                                <h2 className="title"><span data-text={project.title}>{project.title}</span></h2>
                                <h4>Technologies</h4>
                                <ul>
                                    {project.technologies.map((technology, index) => {
                                        return (
                                            <li key={index} ><FontAwesomeIcon className="check" icon={faCheckCircle} />  {technology}</li>
                                        )
                                    })}
                                </ul>
                                <div className="project-links">
                                    <div onClick={()=>window.open(project.appLink)} className="icon">
                                        <FontAwesomeIcon icon={faGlobeAmericas} />
                                    </div>
                                    <div onClick={()=>window.open(project.codeLink)} className="icon">
                                        <FontAwesomeIcon icon={faCode} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

interface IProjectGrid {
    projects: Array<IProject>
}

export default ProjectGrid