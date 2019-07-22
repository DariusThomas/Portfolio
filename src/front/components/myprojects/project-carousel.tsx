import * as React from "react"
import { useContext } from "react"
import { pageContext } from "../../utils/context/ProjectContext"
import "../../style/project-carousel.scss"
import { IProject } from "../../utils/projects"
import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome/index"
import { faTimes } from "../../../../node_modules/@fortawesome/free-solid-svg-icons/index"
import { faCaretSquareLeft, faCaretSquareRight } from "../../../../node_modules/@fortawesome/free-regular-svg-icons/index"


const ProjectCarousel: React.SFC<IProjectCarousel> = (props) => {

    let {setToggel, setNum} = useContext(pageContext)

    function closeModal() {
        setToggel(false)
        setNum(0)
    }

    return (
        <>
            <div className="carousel-modal">
                <div onClick={closeModal} className="close-modal"><FontAwesomeIcon icon={faTimes} /></div>
                <div className="left-caret"><FontAwesomeIcon icon={faCaretSquareLeft} /></div>
                <div className="right-caret"><FontAwesomeIcon icon={faCaretSquareRight} /></div>
                <div className="dot-container">
                    {props.projects.map(project => {
                        return <div key={project.id} className="carousel-dot"></div>
                    })}
                </div>
            </div>
        </>
    )
}

interface IProjectCarousel {
    projects: Array<IProject>
}

export default ProjectCarousel