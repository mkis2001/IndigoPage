function revealFilter() {
    var x = document.getElementById("forma");
    if (x.style.display === "block") {
        document.getElementById("gore").style.display = "none";
        document.getElementById("dolje").style.display = "inline";
        x.style.opacity = 0;
        x.style.height = "0"
        setTimeout(()=>{
            x.style.display = "none";
        },333);
    } else {
        document.getElementById("gore").style.display = "inline";
        document.getElementById("dolje").style.display = "none";
        x.style.opacity = 0;
        x.style.height = "0"
        x.style.display = "block";
        setTimeout(()=>{
            x.style.opacity = 1;
            x.style.height = "8em";
        },0);
    }
}
