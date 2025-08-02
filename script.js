function show_about_me (){
    console.log("dasfsdf");
    document.getElementById("show_about_me_1").style.display = "flex";
    document.getElementById("show_about_me_2").style.display = "unset";
    document.getElementById("show_skill").style.display = "none";
}

function show_skill (){
    console.log("dasfsdfadfsdgf");
    document.getElementById("show_about_me_1").style.display = "none";
    document.getElementById("show_about_me_2").style.display = "none";
    document.getElementById("show_skill").style.display = "flex";
    document.getElementById("sub-node").style =  "animation: fadeInUp 1.5s ease-out";
}