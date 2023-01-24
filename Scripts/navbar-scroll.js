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