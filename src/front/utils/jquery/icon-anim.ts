import * as $ from "jquery"

const fadeIn: Function = () => {
    return $(document).ready(() => {
        let $img1 = $(".list1")
        let $img2 = $(".list2")


        $(window).scroll(inView)
        $(window).on("touchmove", inView)
        inView()
        function inView() {
            let elementTop1 = $img1.offset().top;
            let elementBottom1 = elementTop1 + $img1.outerHeight();
            let viewportTop = $(document).scrollTop();
            let viewportBottom = viewportTop + $(window).height();
            let elementTop2 = $img2.offset().top;
            let elementBottom2 = elementTop2 + $img2.outerHeight();
            if (elementBottom1 > viewportTop && elementTop1 < viewportBottom) {
                $img1.children().each((i, obj) => {
                    $(`.list1 > li:nth-child(${i + 1})`).css("animation", `slide-up .5s forwards ${1.5 * (1 + i) / 10}s`)
                })
            }
            if (elementBottom2 > viewportTop && elementTop2 < viewportBottom) {
                $img2.children().each((i, obj) => {
                    $(`.list2 > li:nth-child(${i + 1})`).css("animation", `slide-up .5s forwards ${1.5 * (1 + i) / 10}s`)
                })

            }

        };


    })

}
export default fadeIn