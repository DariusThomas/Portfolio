import * as React from "react"
import "../../style/polaroid.scss"
import {Link} from "react-router-dom"
import {pageinfo} from "../../utils/links"
import icons from "../../utils/icons"
const Polaroid: React.SFC<IPolProps> = (props) => {
    let varClass:string
    let polaImg:string
    if (props.links.id == 0) {
        varClass="first-pola"
        polaImg=icons.projects
    } else if (props.links.id == 1) {
        varClass="middle-pola"
        polaImg=icons.avatar
    } else if (props.links.id == 2) {
        varClass="last-pola"
        polaImg=icons.contactMe
    }
    return (
        <Link to ={`/${props.links.route}`} style={{backgroundImage:`url(./js/${icons.polaBg})`}} className={`pola-sheild ${varClass}`}>
            <div className="pola-film">
            <img src={`./js/${polaImg}`}/>
            </div>
            <div className="pola-sig">
                {props.links.title}
            </div>
        </Link>
    )
}

interface IPolProps {
links:pageinfo
}

export default Polaroid