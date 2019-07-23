import * as $ from "jquery"

const setModal: Function = (num: number,scroll:number,setScroll:React.Dispatch<React.SetStateAction<number>>) => {

    return $(document).ready(() => {
        let prevY:number
        let val = num

        let $leftBtn = $(".left-caret");
        let $rightBtn = $(".right-caret");
        let $view = $(".project-view");
        let $dot = $(".carousel-dot");


        $leftBtn.click(nextLeft)
        $rightBtn.click(nextRight)
        $dot.click(dotValue)

        $(".project-item").unbind().click(()=>{
            setScroll($(document).scrollTop())
            window.scrollTo(0, 0)
            $(".projects-container").css({
                "position":"absolute",
                "top":"0px",
                "left":"0px",
                "overflow-x":"hidden",
                "min-height":"100%"
            })

        })
        $(".close-modal").unbind().click(()=>{
             $(".projects-container").css({
                "position":"relative",
                "top":"0px",
                "left":"0px",
                "overflow-x":"visible",
                "min-height":"50vh"
            })
            window.scrollTo(0, scroll)
            setScroll(0)
        })

        carousel(val)

        function nextLeft() {
            val--
            if (val == 0) {
                val = 1
            }
            carousel(val)
        }

        function nextRight() {
            val++
            if (val == 7) {
                val = 6
            }
            carousel(val)
        }


        function carousel(val: number) {
            $leftBtn.css("display","block")
            $rightBtn.css("display","block");
            
            if(val==6){
                $rightBtn.css("display","none");
            }else if(val ==1){
                $leftBtn.css("display","none");
            }
            
            $view.each((i, obj) => {
                if (i + 1 == val) {
                    $(obj).css({
                        "left": "50%",
                        "opacity":"1",
                    })
                } else if (i + 1 < val) {
                    $(obj).css({
                        "left": "-100%",
                    })
                } else if (i + 1 > val) {
                    $(obj).css({
                        "left": "150%",
                    })
                }
            })

            $dot.each((i, obj) => {
                if (i + 1 == val) {
                    $(obj).css({
                        "background": "white"
                    })
                } else {
                    $(obj).css({
                        "background": "rgba(255,255,255,0)"
                    })
                }
            })

        }

        function dotValue(){
            val = $(this).index()+1
            carousel(val)
        }

    })
}

export {
    setModal
}