import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome/index";
import { faHome, faCaretLeft } from "../../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import "../../style/contact-me.scss"
import ContactForm from "./contact-form";
import icons from "../../utils/icons"
import slideIn from "../../utils/jquery/contact-icon-anim"
import { myInfo } from "../../utils/myInfo"
import { DMContext } from "../../utils/context/ContactContext"
import DmResModal from "./DMResModal"
const Contact: React.SFC<IContactProps> = (props) => {

    const [res, setRes] = useState({attempt:false,success:false,pending:false})

    useEffect(() => {
        slideIn(myInfo, icons)
    }, [])
    return (
        <>
            <DMContext.Provider value ={{res,setRes}}>
                
                <div className="head">
                    <div className="title" >
                        <span className="page-title" data-text="[Contact_Me]">[Contact_Me]</span>
                    </div>
                    <Link className="home-link" to="/"><FontAwesomeIcon icon={faHome} /></Link>
                </div>
                <div className="contact-container">
                    <div className="left">
                        <div className="left-container">
                            <div className="slider">
                                <FontAwesomeIcon className="close" icon={faCaretLeft} />
                                <img />
                                <div className="slider-info-container">
                                    <div className="slider-text-wrapper">
                                        <p className="slider-info"></p>
                                    </div>
                                </div>
                            </div>
                            <button value="gmail" className="img-container">
                                <img src={`./js/${icons.gmail}`} />
                            </button>
                            <button value="linkedin" className="img-container">
                                <img src={`./js/${icons.linkedin}`} />
                            </button>
                            <button value="phone" className="img-container">
                                <img src={`./js/${icons.phone}`} />
                            </button>
                        </div>
                    </div>
                    <div className="right">
                        <ContactForm />
                    </div>
                </div>
                <DmResModal />
            </DMContext.Provider>
        </>
    )
}

interface IContactProps {
}

export default Contact