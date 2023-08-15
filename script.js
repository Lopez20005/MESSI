setTimeout(function(){
    document.getElementById("loading-page").className += "loaded";
    document.getElementById("loader").className += "opzero";
    document.getElementById("lastray").className += " finalray";
    document.body.className += "whitebk";

},6500);
gsap.to("#bg",{
    scrollTrigger:{
        scrub:1
    },
    scale:1.5
})
gsap.to("#man",{
    scrollTrigger:{
        scrub:1
    },
    scale:0.5
})

gsap.to("#text",{
    scrollTrigger:{
        scrub:1
    },
    y:500
})