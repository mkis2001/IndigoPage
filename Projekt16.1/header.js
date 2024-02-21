function headerFunction() {
    var x = document.getElementById("nav");
    if (x.style.display === "flex") {
        x.style.opacity = 0;
        document.getElementById("menu").style.display = "";
        document.getElementById("close").style.display = "none"
        x.style.height = "0";
        setTimeout(() => {
            x.style.display = "none";
        },333)
    } else {
        x.style.height = "0";
        x.style.display = "flex";
        x.style.opacity = 0
        document.getElementById("menu").style.display = "none";
        document.getElementById("close").style.display = ""
        setTimeout(() => {
            x.style.opacity = 1;
            x.style.height = "12em";
        },0)
    }
}

addEventListener("resize",(event)=>{
    if(window.innerWidth > 768){
        x = document.getElementById("nav");
        x.style.display = "";
        x.style.opacity = 1;
        x.style.height = ""
    }
})