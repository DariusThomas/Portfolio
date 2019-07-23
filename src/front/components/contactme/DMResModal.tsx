import * as React from "react"
import { useContext } from "react"
import { DMContext } from "../../utils/context/ContactContext"
import "../../style/direct-message.scss"
import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome/index"
import { faTimes, faExclamationTriangle, faThumbsUp } from "../../../../node_modules/@fortawesome/free-solid-svg-icons/index"
const DmResModal: React.SFC<IDMProps> = (props) => {

   const { res, setRes } = useContext(DMContext)

   function closeRes() {
      setRes({ ...res, attempt: false, success: false, pending: false })
   }


   let modal: any

   //using react instead of jquery
   if (res.attempt && res.pending) {
      modal = <div className="res-modal">
         <div className="ball-container">
            <div className="ball a"></div>
            <div className="ball b"></div>
            <div className="ball c"></div>
            <div className="ball d"></div>
         </div>
      </div>
   } else if (res.attempt && res.success && !res.pending) {
      modal = <div className="res-modal">
         <div className="res-container" style={{ background: "green" }}>
            <div onClick={closeRes} className="close-response"><FontAwesomeIcon icon={faTimes} /></div>
            <div className="res-title">
               <FontAwesomeIcon icon={faThumbsUp} /> Success
            </div>
            <div className="res-message">
               You're message has been succesfully sent. I will get back to you as soon as possible.
            </div>
         </div>
      </div>
   } else if (res.attempt && !res.success && !res.pending) {
      modal = <div className="res-modal">
         <div className="res-container" style={{ background: "red" }}>
            <div onClick={closeRes} className="close-response"><FontAwesomeIcon icon={faTimes} /></div>
            <div className="res-title">
               <FontAwesomeIcon icon={faExclamationTriangle} /> Error
         </div>
            <div className="res-message">
               The message system is currently down. Feel free to use my Gmail or Telephone number in order to contact me.
         </div>
         </div>
      </div>
   }

   return (
      <>
         {modal}
      </>
   )
}

interface IDMProps {
}

export default DmResModal