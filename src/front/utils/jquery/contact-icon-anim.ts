import * as $ from "jquery"
import {IInfo} from "../myInfo"
const slideIn:Function=(myInfo:IInfo,icon:any)=>{
    return $(document).ready(()=>{


        let $btn = $(".img-container")
        let $slider = $(".slider")
        let $slideImg = $slider.find("img")
        let $close = $slider.find(".close")
        let $info = $(".slider-info")

        $btn.click(open)
        $close.click(close)


        function open(){
            $slideImg.attr("src",`./js/${icon[$(this).attr("value")]}`)
            $slider.css("background",$(this).css("backgroundColor"))
            $slider.css("left","0")
            $info.text(myInfo[$(this).attr("value")])
            if($(this).attr("value")=="gmail"){
                $info.css("font-size","1rem")
            }else if($(this).attr("value")=="linkedin"){
                $info.css("font-size","1.7rem")
            }else if($(this).attr("value")=="phone"){
                $info.css("font-size","1.5rem")
             }

        }

        function close(){
            $slider.css("left","-100%")
        }
    })
}

export default slideIn