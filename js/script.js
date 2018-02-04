//slider-jak na warsztatach https://www.w3schools.com/w3css/w3css_slideNext.asp
// https://www.w3schools.com/jsref/event_onclick.asp

var index = 1;
slideShow(index);

function slideNext(n) {
    slideShow(index += n);
}

function slideShow(n) {
    var slides = document.querySelectorAll(".slider-content");
    if (n > slides.length) {
        index = 1;
    }
    if (n < 1) {
        index = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[index-1].style.display = "flex";
}


