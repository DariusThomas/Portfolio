import * as React from "react"
import {useEffect} from "react"
import { Link } from "react-router-dom"
import "../../style/about-me.scss"
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome/index'
import { faHome, faMailBulk } from "../../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import icons from "../../utils/icons"
import Card from "./card"
import fadeIn from "../../utils/jquery/icon-anim"
import {myInfo} from "../../utils/myInfo"
const AboutMe: React.SFC<IAboutProps> = (props) => {

    useEffect(()=>{
        fadeIn()
    },[])

    return (
        <>
            <div className="head">
                <div className="title" >
                    <span className="page-title" data-text="[About_Me]">[About_Me]</span>
                </div>
                <Link className="home-link" to="/"><FontAwesomeIcon icon={faHome} /></Link>
            </div>
            <div className="about-me-container">
                <div className="topic">
                    <div className="intro">
                        <Card info ={myInfo} avatar={icons.avatar}/>
                        <div className="description">{myInfo.about_me} Feel free to <Link className="contact-link" to="/contact-me">contact me</Link> for any further inquiries</div>

                    </div>
                </div>
                <div className="topic">
                    <h2>Technologies</h2>
                    <ul className="icon-list list1">
                        <li data-text="HTML5"><img src={`./js/${icons.html5}`} /></li>
                        <li data-text="CSS"><img src={`./js/${icons.css3}`} /></li>
                        <li data-text="Javascript"><img  src={`./js/${icons.js}`} /></li>
                        <li data-text="JQuery"><img src={`./js/${icons.jquery}`} /></li>
                        <li data-text="React.js"><img src={`./js/${icons.react}`} /></li>
                        <li data-text="Bootstrap"><img src={`./js/${icons.bootstrap}`} /></li>
                        <li data-text="Sass"><img  src={`./js/${icons.sass}`} /></li>
                        <li data-text="Typescript"><img src={`./js/${icons.ts}`} /></li>
                        <li data-text="Node.js"><img src={`./js/${icons.node}`} /></li>
                        <li data-text="MySQL"><img  src={`./js/${icons.mysql}`} /></li>
                    </ul>
                </div>
                <div className="topic">
                    <h2>Resources</h2>
                    <ul className="icon-list list2">
                        <li data-text="Covalence"><img src={`./js/${icons.covalence}`} /></li>
                        <li data-text="FreeCodeCamp"><img src={`./js/${icons.fcc}`} /></li>
                        {/* <li data-text="Edx"><img src={`./js/${icons.edx}`} /></li> */}
                        <li data-text="Udemy"><img src={`./js/${icons.udemy}`} /></li>
                        <li data-text="Stackoverflow"><img src={`./js/${icons.stack}`} /></li>
                        <li data-text="W3schools"><img style={{ transform: "scale(1.7) translateY(5%)" }} src={`./js/${icons.w3}`} /></li>
                        <li data-text="youtube"><img src={`./js/${icons.yt}`} /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

interface IAboutProps {

}

export default AboutMe