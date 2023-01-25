window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbar").style.height = "4rem";
    }
    else {
        document.querySelector(".navbar").style.height = "6rem";
    }
};


const footerCopyright = document.getElementById("footer-copyright");
let date = new Date().getFullYear();
footerCopyright.innerHTML = "@RahulSinghMeraNaam 1999-" + date;



function navHome() {
    //alert("it is working!");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function navAbout() {
    //alert("it is working!");
    document.body.scrollTop = 700;
    document.documentElement.scrollTop = 700
}
function navProjects() {
    //alert("it is working!");
    if (window.innerWidth < 400) {
        document.body.scrollTop = 1850;
        document.documentElement.scrollTop = 1850;
    } else {
        document.body.scrollTop = 1400;
        document.documentElement.scrollTop = 1400;
    }
}