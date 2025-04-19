//hide and show search //
$(document).ready(function () {
    $(".searcha").click(function () {
        $(".search-page").show();
        $(".head-img").css({
            filter: "blur(5.6px)",
        })
        $(".intro-info").css({
            filter: "blur(5.6px)",
        })
    })
    $(".fa-x").click(function () {
        $(".search-page").hide();
        $(".head-img").css({
            filter: "blur(0px)"
        })
        $(".intro-info").css({
            filter: "blur(0px)"
        })
    })
})
/// chat-box //

$(document).ready(function () {
    $(".chat").click(function () {
        $(".chat-bot").show(150)
        $(".chat").hide(300)
    })
    $(".chat-close").click(function () {
        $(".chat-bot").hide(150)
        $(".chat").show(300)
    })
    $(".chat-transfar").click(function () {
        $(".chat-bot").css({
            left: "10px",
        })
        $(".chat-transfar").hide()
        $(".chat-transfar-right").show()
    })
    $(".chat-transfar-right").click(function () {
        $(".chat-bot").css({
            left:"1000px"
        })
        $(".chat-transfar-right").hide()
        $(".chat-transfar").show()
    })
})
// chat box end//

// searcch shortcut arrow css color change///
$(document).ready(function () {
    $(".ser-det1").mousemove(function () {
        $(".arrow1").css({
            color:"#ffffff"
        })
    })
    $(".ser-det2").mousemove(function () {
        $(".arrow2").css({
            color:"#ffffff"
        })
    })
    $(".ser-det3").mousemove(function () {
        $(".arrow3").css({
            color:"#ffffff"
        })
    })
    $(".ser-det4").mousemove(function () {
        $(".arrow4").css({
            color:"#ffffff"
        })
    })
    $(".ser-det1").mouseout(function () {
        $(".arrow1").css({
            color:"rgb(122, 128, 132)"
        })
    })
    $(".ser-det2").mouseout(function () {
        $(".arrow2").css({
            color:"rgb(122,128,132)"
        })
    })
    $(".ser-det3").mouseout(function () {
        $(".arrow3").css({
            color:"rgb(122,128,132)"
        })
    })
    $(".ser-det4").mouseout(function () {
        $(".arrow4").css({
            color:"rgb(122,128,132)"
        })
    })
})
//arrow css end

//menu service hover//

$(document).ready(function () {
    $(".menu-service").mousemove(function () {
        $(".service-sub-list").show();
    })
    $(".menu-service").mouseout(function () {
        $(".service-sub-list").hide();
    })
    $(".menu-about").mousemove(function () {
        $(".about-sub-list").show();
    })
    $(".menu-about").mouseout(function () {
        $(".about-sub-list").hide();
    })
})
//menu service hover End//



// nav background//

let navbg = document.querySelector(".navbar");
let navicon1 =document.querySelector(".searcha");
let navicon2 = document.querySelector(".menubar");
let navlogo = document.querySelector(".logo-new-black");

window.addEventListener("scroll",() => {
    if (window.scrollY >=56) {
        navbg.classList.add("nav-scrool");
        navicon1.style.color = "black";
        navicon2.style.color = "black";
        navlogo.style.display = "inline";
    }else if (window.scrollY < 56) {
        navbg.classList.remove("nav-scrool");
        navicon1.style.color = "white";
        navicon2.style.color = "white";
        navlogo.style.display = "none";
    }
})
// nav-background-end//



// tiago color change//
$(document).ready(function () {
    $(".tiago-color-chang-blue").click(function () {
        $(".tiago-img").css({
            backgroundColor:"rgb(24, 100, 179)"
        })
        $(".tiago-blue").css({
            display:"inline"
        })
        $(".tiago-red").css({
            display:"none"
        })
        $(".tiago-gry").css({
            display:"none"
        })
        $(".tiago-white").css({
            display:"none"
        })
        $(".tiago-blueblack").css({
            display:"none"
        })
        $(".tiago-whiteblack").css({
            display:"none"
        })
    })
    $(".tiago-color-chang-red").click(function () {
        $(".tiago-img").css({
            backgroundColor:"rgb(172, 18, 10)",
        })
        $(".tiago-red").css({
            display:"inline"
        })
        $(".tiago-blue").css({
            display:"none"
        })
        $(".tiago-gry").css({
            display:"none"
        })
        $(".tiago-white").css({
            display:"none"
        })
        $(".tiago-blueblack").css({
            display:"none"
        })
        $(".tiago-whiteblack").css({
            display:"none"
        })
    })
    $(".tiago-color-chang-gry").click(function () {
        $(".tiago-img").css({
            backgroundColor:"rgb(56, 57, 59)"
        })
        $(".tiago-gry").css({
            display:"inline"
        })
        $(".tiago-red").css({
            display:"none"
        })
        $(".tiago-blue").css({
            display:"none"
        })
        $(".tiago-white").css({
            display:"none"
        })
        $(".tiago-blueblack").css({
            display:"none"
        })
        $(".tiago-whiteblack").css({
            display:"none"
        })
    })
    $(".tiago-color-chang-white").click(function () {
        $(".tiago-img").css({
            backgroundColor:"rgb(220, 221, 223)"
        })
        $(".tiago-white").css({
            display:"inline"
        })
        $(".tiago-red").css({
            display:"none"
        })
        $(".tiago-blue").css({
            display:"none"
        })
        $(".tiago-gry").css({
            display:"none"
        })
        $(".tiago-blueblack").css({
            display:"none"
        })
        $(".tiago-whiteblack").css({
            display:"none"
        })
    })
    $(".tiago-color-chang-blueblach").click(function () {
        $(".tiago-img").css({
            backgroundColor:"rgb(24, 100, 179)"
        })
        $(".tiago-blueblack").css({
            display:"inline"
        })
        $(".tiago-red").css({
            display:"none"
        })
        $(".tiago-blue").css({
            display:"none"
        })
        $(".tiago-white").css({
            display:"none"
        })
        $(".tiago-gry").css({
            display:"none"
        })
        $(".tiago-whiteblack").css({
            display:"none"
        })
    })
    $(".tiago-color-chang-white-black").click(function () {
        $(".tiago-img").css({
            backgroundColor:"rgb(220, 221, 223)"
        })
        $(".tiago-whiteblack").css({
            display:"inline"
        })
        $(".tiago-red").css({
            display:"none"
        })
        $(".tiago-blue").css({
            display:"none"
        })
        $(".tiago-white").css({
            display:"none"
        })
        $(".tiago-blueblack").css({
            display:"none"
        })
        $(".tiago-gry").css({
            display:"none"
        })
    })
    
})
// tiago End//

// altroz color chang//
$(document).ready(function () {
    $(".altroz-color-blue").click(function () {
        $(".altroz-img-main").css({
             backgroundColor:"rgb(0, 40, 111)"
        })
        $(".altroz-blue").css({
            display:"inline"
        })
        $(".altroz-white").css({
            display:"none"
        })
        $(".altroz-red").css({
            display:"none"    
        })
        $(".altroz-gry").css({
            display:"none"    
        })
    })
    $(".altroz-color-white").click(function () {
        $(".altroz-img-main").css({
             backgroundColor:"rgb(224, 228, 220)"
        })
        $(".altroz-white").css({
            display:"inline"
        })
        $(".altroz-red").css({
            display:"none"
        })
        $(".altroz-gry").css({
            display:"none"    
        })
        $(".altroz-blue").css({
            display:"none"    
        })
    })
    $(".altroz-color-red").click(function () {
        $(".altroz-img-main").css({
             backgroundColor:"rgb(110, 22, 24)"
        })
        $(".altroz-red").css({
            display:"inline"
        })
        $(".altroz-white").css({
            display:"none"
        })
        $(".altroz-gry").css({
            display:"none"    
        })
        $(".altroz-blue").css({
            display:"none"    
        })
    })
    $(".altroz-color-gry").click(function () {
        $(".altroz-img-main").css({
             backgroundColor:"rgb(69, 70, 75)"
        })
        $(".altroz-gry").css({
            display:"inline"
        })
        $(".altroz-red").css({
            display:"none"
        })
        $(".altroz-white").css({
            display:"none"    
        })
        $(".altroz-blue").css({
            display:"none"    
        })
    })
})
// altroz color chang end//

// tigor color change//
$(document).ready(function () {
    $(".tigor-color-choko").click(function () {
        $(".tigor-img").css({
             backgroundColor:"rgb(160, 127, 82)"
        })
        $(".tigor-choko ").css({
            display:"inline"
        })
        $(".tigor-red").css({
            display:"none"
        })
        $(".tigor-gry").css({
            display:"none"    
        })
        $(".tigor-blue").css({
            display:"none"    

        })
        $(".tigor-white").css({
            display:"none"    

        })
    })
    $(".tigor-color-red").click(function () {
        $(".tigor-img").css({
             backgroundColor:"rgb(135, 83, 86)"
        })
        $(".tigor-choko ").css({
            display:"none"
        })
        $(".tigor-red").css({
            display:"inline"
        })
        $(".tigor-gry").css({
            display:"none"    
        })
        $(".tigor-blue").css({
            display:"none"    

        })
        $(".tigor-white").css({
            display:"none"    

        })
    })
    $(".tigor-color-gry").click(function () {
        $(".tigor-img").css({
             backgroundColor:"rgb(56, 57, 59)"
        })
        $(".tigor-choko ").css({
            display:"none"
        })
        $(".tigor-red").css({
            display:"none"
        })
        $(".tigor-gry").css({
            display:"inline"    
        })
        $(".tigor-blue").css({
            display:"none"    

        })
        $(".tigor-white").css({
            display:"none"    

        })
    })
    $(".tigor-color-blue").click(function () {
        $(".tigor-img").css({
             backgroundColor:"rgb(16, 61, 110)"
        })
        $(".tigor-choko ").css({
            display:"none"
        })
        $(".tigor-red").css({
            display:"none"
        })
        $(".tigor-gry").css({
            display:"none"    
        })
        $(".tigor-blue").css({
            display:"inline"    

        })
        $(".tigor-white").css({
            display:"none"    

        })
    })
    $(".tigor-color-white").click(function () {
        $(".tigor-img").css({
             backgroundColor:"rgb(254, 254, 254)"
        })
        $(".tigor-choko ").css({
            display:"none"
        })
        $(".tigor-red").css({
            display:"none"
        })
        $(".tigor-gry").css({
            display:"none"    
        })
        $(".tigor-blue").css({
            display:"none"    

        })
        $(".tigor-white").css({
            display:"inline"    

        })
    })
    
})
// tigor color change end//

// punch color change//

$(document).ready(function () {
    $(".punch-color-blue").click(function () {
        $(".punch-img").css({
             backgroundColor:"rgb(24, 100, 179)"
        })
        $(".punch-blue").css({
            display:"inline"
        })
        $(".punch-gry").css({
            display:"none"
        })
        $(".punch-mist").css({
            display:"none"    
        })
        $(".punch-white").css({
            display:"none"    
        })
        $(".punch-orange").css({
            display:"none"    
        })
        $(".punch-bronz").css({
            display:"none"    
        })
        $(".punch-red").css({
            display:"none"    
        })
    })
    $(".punch-color-gry").click(function () {
        $(".punch-img").css({
             backgroundColor:"rgb(56, 57, 59)"
        })
        $(".punch-blue").css({
            display:"none"
        })
        $(".punch-gry").css({
            display:"inline"
        })
        $(".punch-mist").css({
            display:"none"    
        })
        $(".punch-white").css({
            display:"none"    
        })
        $(".punch-orange").css({
            display:"none"    
        })
        $(".punch-bronz").css({
            display:"none"    
        })
        $(".punch-red").css({
            display:"none"    
        })
    })
    $(".punch-color-mist").click(function () {
        $(".punch-img").css({
             backgroundColor:"rgb(116, 145, 169)"
        })
        $(".punch-blue").css({
            display:"none"
        })
        $(".punch-gry").css({
            display:"none"
        })
        $(".punch-mist").css({
            display:"inline"    
        })
        $(".punch-white").css({
            display:"none"    
        })
        $(".punch-orange").css({
            display:"none"    
        })
        $(".punch-bronz").css({
            display:"none"    
        })
        $(".punch-red").css({
            display:"none"    
        })
    })
    $(".punch-color-white").click(function () {
        $(".punch-img").css({
             backgroundColor:"rgb(254,254,254)"
        })
        $(".punch-blue").css({
            display:"none"
        })
        $(".punch-gry").css({
            display:"none"
        })
        $(".punch-mist").css({
            display:"none"    
        })
        $(".punch-white").css({
            display:"inline"    
        })
        $(".punch-orange").css({
            display:"none"    
        })
        $(".punch-bronz").css({
            display:"none"    
        })
        $(".punch-red").css({
            display:"none"    
        })
    })
    $(".punch-color-orange").click(function () {
        $(".punch-img").css({
             backgroundColor:"rgb(245, 64, 24)"
        })
        $(".punch-blue").css({
            display:"none"
        })
        $(".punch-gry").css({
            display:"none"
        })
        $(".punch-mist").css({
            display:"none"    
        })
        $(".punch-white").css({
            display:"none"    
        })
        $(".punch-orange").css({
            display:"inline"    
        })
        $(".punch-bronz").css({
            display:"none"    
        })
        $(".punch-red").css({
            display:"none"    
        })
    })
    $(".punch-color-bronz").click(function () {
        $(".punch-img").css({
             backgroundColor:"rgb(160, 127, 82)"
        })
        $(".punch-blue").css({
            display:"none"
        })
        $(".punch-gry").css({
            display:"none"
        })
        $(".punch-mist").css({
            display:"none"    
        })
        $(".punch-white").css({
            display:"none"    
        })
        $(".punch-orange").css({
            display:"none"    
        })
        $(".punch-bronz").css({
            display:"inline"    
        })
        $(".punch-red").css({
            display:"none"    
        })
    })
    $(".punch-color-red").click(function () {
        $(".punch-img").css({
             backgroundColor:"rgb(195, 34, 40)"
        })
        $(".punch-blue").css({
            display:"none"
        })
        $(".punch-gry").css({
            display:"none"
        })
        $(".punch-mist").css({
            display:"none"    
        })
        $(".punch-white").css({
            display:"none"    
        })
        $(".punch-orange").css({
            display:"none"    
        })
        $(".punch-bronz").css({
            display:"none"    
        })
        $(".punch-red").css({
            display:"inline"    
        })
    })
})
// punch end//

$(document).ready(function () {
    $(".nexon-color-purpul").click(function () {
        $(".nexon-img").css({
             backgroundColor:"rgb(38, 24, 102)"
        })
        $(".nexon-car-purpul").css({
            display:"inline"
        })
        $(".nexon-car-white").css({
            display:"none"
        })
        $(".nexon-car-gry").css({
            display:"none"    
        })
        $(".nexon-car-red").css({
            display:"none"    
        })
    })
    $(".nexon-color-white").click(function () {
        $(".nexon-img").css({
             backgroundColor:"rgb(245,254,254)"
        })
        $(".nexon-car-purpul").css({
            display:"none"
        })
        $(".nexon-car-white").css({
            display:"inline"
        })
        $(".nexon-car-gry").css({
            display:"none"    
        })
        $(".nexon-car-red").css({
            display:"none"    
        })
    })
    $(".nexon-color-gry").click(function () {
        $(".nexon-img").css({
             backgroundColor:"rgb(56, 57, 59)"
        })
        $(".nexon-car-purpul").css({
            display:"none"
        })
        $(".nexon-car-white").css({
            display:"none"
        })
        $(".nexon-car-gry").css({
            display:"inline"    
        })
        $(".nexon-car-red").css({
            display:"none"    
        })
    })
    $(".nexon-color-red").click(function () {
        $(".nexon-img").css({
             backgroundColor:"rgb(110, 22, 24)"
        })
        $(".nexon-car-purpul").css({
            display:"none"
        })
        $(".nexon-car-white").css({
            display:"none"
        })
        $(".nexon-car-gry").css({
            display:"none"    
        })
        $(".nexon-car-red").css({
            display:"inline"    
        })
    })
})

// nexon end//


// Harrier //
$(document).ready(function () {
    $(".harrier-color-yellow").click(function () {
        $(".harrier-img").css({
             backgroundColor:"rgb(210, 201, 36)"
        })
        $(".harrier-car-yellow").css({
            display:"inline"
        })
        $(".harrier-car-red").css({
            display:"none"
        })
        $(".harrier-car-gry").css({
            display:"none"    
        })
        $(".harrier-car-white").css({
            display:"none"    
        })
    })
    $(".harrier-color-red").click(function () {
        $(".harrier-img").css({
             backgroundColor:"rgb(110, 22, 24)"
        })
        $(".harrier-car-yellow").css({
            display:"none"
        })
        $(".harrier-car-red").css({
            display:"inline"
        })
        $(".harrier-car-gry").css({
            display:"none"    
        })
        $(".harrier-car-white").css({
            display:"none"    
        })
    })
    $(".harrier-color-gry").click(function () {
        $(".harrier-img").css({
             backgroundColor:"rgb(141, 142, 147)"
        })
        $(".harrier-car-yellow").css({
            display:"none"
        })
        $(".harrier-car-red").css({
            display:"none"
        })
        $(".harrier-car-gry").css({
            display:"inline"    
        })
        $(".harrier-car-white").css({
            display:"none"    
        })
    })
    $(".harrier-color-white").click(function () {
        $(".harrier-img").css({
             backgroundColor:"rgb(224, 228, 220)"
        })
        $(".harrier-car-yellow").css({
            display:"none"
        })
        $(".harrier-car-red").css({
            display:"none"
        })
        $(".harrier-car-gry").css({
            display:"none"    
        })
        $(".harrier-car-white").css({
            display:"inline"    
        })
    })
})



// safari//
$(document).ready(function () {
    $(".safari-color-gold").click(function () {
        $(".safari-img").css({
             backgroundColor:"rgb(202, 172, 124)"
        })
        $(".safari-car-gold").css({
            display:"inline"
        })
        $(".safari-car-white").css({
            display:"none"
        })
        $(".safari-car-ash").css({
            display:"none"    
        })
        $(".safari-car-blue").css({
            display:"none"    
        })
    })
    $(".safari-color-white").click(function () {
        $(".safari-img").css({
             backgroundColor:"rgb(254, 254, 254)"
        })
        $(".safari-car-gold").css({
            display:"none"
        })
        $(".safari-car-white").css({
            display:"inline"
        })
        $(".safari-car-ash").css({
            display:"none"    
        })
        $(".safari-car-blue").css({
            display:"none"    
        })
    })
    $(".safari-color-ash").click(function () {
        $(".safari-img").css({
             backgroundColor:"rgb(108, 115, 121)"
        })
        $(".safari-car-gold").css({
            display:"none"
        })
        $(".safari-car-white").css({
            display:"none"
        })
        $(".safari-car-ash").css({
            display:"inline"    
        })
        $(".safari-car-blue").css({
            display:"none"    
        })
    })
    $(".safari-color-blue").click(function () {
        $(".safari-img").css({
             backgroundColor:"rgb(0, 97, 170)"
        })
        $(".safari-car-gold").css({
            display:"none"
        })
        $(".safari-car-white").css({
            display:"none"
        })
        $(".safari-car-ash").css({
            display:"none"    
        })
        $(".safari-car-blue").css({
            display:"inline"    
        })
    })
})
// safari end/////