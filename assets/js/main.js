const tablinks=document.getElementsByClassName("tab_links");
const tabContents=document.getElementsByClassName("my_details");

function openfun(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcontent of tabContents){
        tabcontent.classList.remove("active");
    }

    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active");
}


// code for typing animation
var typed=new Typed(".typing",{
    strings:["Frondent Developer", "Backend Developer","Freelancer", "Web Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
