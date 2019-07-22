import * as React from "react"
import "../../style/card.scss"
import {IInfo} from "../../utils/myInfo";
const Card: React.SFC<ICardProps> = (props) => {
    return (
        <div className="card">
            <div className="left">
                <img id="avatar" src={`./js/${props.avatar}`} alt="" />
                        <p className="name" >Hi, I'm {props.info.first_name}.</p >
            </div>
            <div className="right">
                <ul>
                    <li>
                        <h2>Skill Level:</h2>
                        {props.info.level}</li>
                    <li>
                        <h2>Position:</h2>
                        <ul>
                            <li>{props.info.position.primary}</li>
                            <li>{props.info.position.secondary}</li>
                        </ul>
                    </li>
                    <li>
                        <h2>Education:</h2>
                        <ul>
                            <li>{props.info.education}</li>
                        </ul>
                        </li>
                </ul>
            </div>
        </div>
    )
}

interface ICardProps {
    avatar: string,
    info:IInfo
}

export default Card