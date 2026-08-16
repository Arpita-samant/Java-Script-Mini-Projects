let scrollcontainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.style.scrollBehavior = "auto";
    scrollcontainer.scrollLeft += evt.deltaY;
    
});

nextbtn.addEventListener("click", ()=>{
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += scrollcontainer.clientWidth;
    
});

backbtn.addEventListener("click", ()=>{
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= scrollcontainer.clientWidth;
});

