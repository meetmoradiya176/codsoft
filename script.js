function show_about_me (){
    document.getElementById("show_about_me_1").style.display = "flex";
    document.getElementById("show_about_me_2").style.display = "unset";
    document.getElementById("show_skill").style.display = "none";
    document.getElementById("show_projects_1").style.display = "none";
    document.getElementById("show_projects_2").style.display = "none";
    document.getElementById("show_resume").style.display = "none";
}

function show_skill(){
    document.getElementById("show_about_me_1").style.display = "none";
    document.getElementById("show_about_me_2").style.display = "none";
    document.getElementById("show_skill").style.display = "flex";
    document.getElementById("show_projects_1").style.display = "none";
    document.getElementById("show_projects_2").style.display = "none";
    document.getElementById("show_resume").style.display = "none";
    document.getElementById("sub-node").style =  "animation: fadeInUp 1.5s ease-out";
}

function show_projects(){
    document.getElementById("show_about_me_1").style.display = "none";
    document.getElementById("show_about_me_2").style.display = "none";
    document.getElementById("show_skill").style.display = "none";
    document.getElementById("show_projects_1").style.display = "flex";
    document.getElementById("show_projects_2").style.display = "flex";
    document.getElementById("show_resume").style.display = "none";
}

function show_resume(){
    document.getElementById("show_about_me_1").style.display = "none";
    document.getElementById("show_about_me_2").style.display = "none";
    document.getElementById("show_skill").style.display = "none";
    document.getElementById("show_projects_1").style.display = "none";
    document.getElementById("show_projects_2").style.display = "none";
    document.getElementById("show_resume").style.display = "flex";
}





function show_overview(){
    document.getElementById("resume_basic_details_outer_div").style.display = "unset";
    document.getElementById("experience_outer_div").style.display = "none";
    document.getElementById("skills_outer_div").style.display = "none";
    document.getElementById("education_outer_div").style.display = "none";
    document.getElementById("contact_me_resume_outer_div").style.display = "none";
}

function show_experience(){
    document.getElementById("resume_basic_details_outer_div").style.display = "none";
    document.getElementById("experience_outer_div").style.display = "unset";
    document.getElementById("skills_outer_div").style.display = "none";
    document.getElementById("education_outer_div").style.display = "none";
    document.getElementById("contact_me_resume_outer_div").style.display = "none";
}

function show_skills(){
    document.getElementById("resume_basic_details_outer_div").style.display = "none";
    document.getElementById("experience_outer_div").style.display = "none";
    document.getElementById("skills_outer_div").style.display = "unset";
    document.getElementById("education_outer_div").style.display = "none";
    document.getElementById("contact_me_resume_outer_div").style.display = "none";
}

function show_education(){
    document.getElementById("resume_basic_details_outer_div").style.display = "none";
    document.getElementById("experience_outer_div").style.display = "none";
    document.getElementById("skills_outer_div").style.display = "none";
    document.getElementById("education_outer_div").style.display = "flex";
    document.getElementById("contact_me_resume_outer_div").style.display = "none";
}

function show_contact_me(){
    document.getElementById("resume_basic_details_outer_div").style.display = "none";
    document.getElementById("experience_outer_div").style.display = "none";
    document.getElementById("skills_outer_div").style.display = "none";
    document.getElementById("education_outer_div").style.display = "none";
    document.getElementById("contact_me_resume_outer_div").style.display = "flex";
}