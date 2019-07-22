import * as React from "react"
import { IProject } from "../../utils/projects"
import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome/index"
import { faCode, faGlobeAmericas } from "../../../../node_modules/@fortawesome/free-solid-svg-icons/index"
import "../../style/project-view.scss"
const ProjectView: React.SFC<IProjectView> = ({ project }) => {
    return (
        <div id={`${project.id}`} key={project.id} className="project-view">
            <div className="view left-view">
                <h2 className="title"><span data-text={project.title}>{project.title}</span></h2>
                <h4>Description</h4>
                    <div className="topic">
                        <p className="project-description">{project.description}</p>
                    </div>
                    <h4>Technologies</h4>
                    <div className="topic">
                        <ul>
                            {project.technologiesIcon.map((techIcon, index) => {
                                return (
                                    <li data-text={project.technologies[index]} key={index} >
                                        <img className="icon" src={`./js/${techIcon}`} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                <div className="project-links">
                    <button onClick={()=>window.open(project.appLink)} className="icon">
                        <FontAwesomeIcon icon={faGlobeAmericas} />
                        <span> App</span>
                    </button>
                    <button onClick={()=>window.open(project.codeLink)} className="icon">
                        <FontAwesomeIcon icon={faCode} />
                        <span> Code</span>
                    </button>
                </div>
            </div>
            <div className="view right-view">
                <div className="img-container">
                    <img src={`./js/${project.img}`} alt="" />
                </div>
            </div>
        </div>
    )
}

interface IProjectView {
    project: IProject
}

export default ProjectView