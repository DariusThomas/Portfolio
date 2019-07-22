import * as React from "react"
import  "../../style/home.scss"
import Polaroid from "./polaroid";
import {pages, pageinfo} from "../../utils/links"


const Home: React.SFC<IHomeProps> = () => {
        const links:Array<pageinfo> = pages

    return (
        <div className="home-container">
            <div style={{top:"-30px", fontSize:"9vw"}}className="title" >
                <span className="title-home-blink-1" data-text="[Dev_">[Dev_</span>
                <span className="title-home-blink-2" data-text="Portfolio]" >Portfolio]</span>
            </div>
            <div className="pola-container">
            {pages.map((page)=>
                <Polaroid key ={page.id} links={page} />
                )}
                </div>
        </div>
    )
}

interface IHomeProps{
    
}
export default Home