var d=document.querySelector("#cursor-blur")
var cr=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    cr.style.left=dets.x+30+"px"
cr.style.top=dets.y+"px"
})
document.addEventListener("mousemove",function(dets){
    d.style.left=dets.x-250+"px"
d.style.top=dets.y-250+"px"
})
var crsr=document.querySelectorAll("#nav h4")
crsr.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cr.style.scale=3
        cr.style.backgroundColor="transparent"
        cr.style.border="1px solid #fff"
})
elem.addEventListener("mouseleave",function(){
    cr.style.scale=1
    cr.style.backgroundColor="#95C11E"
    cr.style.border="0px solid #95C11E"
})
})



gsap.to("#nav",{
backgroundColor:"#000",
height:"110px",
duation:0.5,
scrollTrigger:{
triggger:"#nav",
scroller:"body",
// markers:true,
start: "top -10%",
end:"top -11%",
scrub:1,
}
})
gsap.to("#main",{
backgroundColor:"#000",
scrollTrigger:{
    trigger:"#main",
scroller:"body",
// markers:true,
start:"top -25%",
end:"top -80%",
scrub:1,
}
})