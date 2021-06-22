//this is for home page hero slides 

var slideIndex = 1;
var timer = null;
//calling the function here to run the slide when the website is loaded
showSlides(slideIndex);

//function to move slides
function plusSlides(n) {
    //clear timeout here so that slides keep running every 6 seconds
    clearTimeout(timer);
    //then call slide function
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n == undefined) {
        n = ++slideIndex
    }
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    //setting the timer to run the slide every 6 seconds
    timer = setTimeout(showSlides, 6000);
}
