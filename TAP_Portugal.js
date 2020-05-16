
var tl= new TimelineMax({});
// var circleLogo= document.getElementsByClassName("circleLogo")

tl.to('.frame', 1, {opacity: 1, y: 0, ease: Back.easeOut.config(1.7) }, 1)
.to('.logo', 1, {opacity: 1, y: 0, ease: Back.easeOut.config(1.7) }, 2)
.to('.circleLogo', 1, {opacity: 1, y: 0, ease: Back.easeOut.config(1.7)}, 2)
.to('.circleLogo2', 1, {opacity: 1, y: 0, ease: Back.easeOut.config(1.7)}, 1.5)
.to('.circleLogo3', 1, {opacity: 1, x: 0, ease: Back.easeOut.config(1.7)}, 1)
.to('.text', 1, {opacity: 1, x: 0, ease: Back.easeOut.config(1.7)}, 2)
.to('.button', 1, {opacity: 1, x: 0, ease: Back.easeOut.config(1.7)}, 1);



