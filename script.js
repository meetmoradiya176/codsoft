function show_about_me (){
    document.getElementById("show_about_me_1").style.display = "flex";
    document.getElementById("show_about_me_2").style.display = "unset";
    document.getElementById("show_skill").style.display = "none";
    document.getElementById("show_projects_1").style.display = "none";
    document.getElementById("show_projects_2").style.display = "none";
}

function show_skill(){
    document.getElementById("show_about_me_1").style.display = "none";
    document.getElementById("show_about_me_2").style.display = "none";
    document.getElementById("show_skill").style.display = "flex";
    document.getElementById("show_projects_1").style.display = "none";
    document.getElementById("show_projects_2").style.display = "none";
    document.getElementById("sub-node").style =  "animation: fadeInUp 1.5s ease-out";
}

function show_projects(){
    document.getElementById("show_about_me_1").style.display = "none";
    document.getElementById("show_about_me_2").style.display = "none";
    document.getElementById("show_skill").style.display = "none";
    document.getElementById("show_projects_1").style.display = "flex";
    document.getElementById("show_projects_2").style.display = "flex";
}