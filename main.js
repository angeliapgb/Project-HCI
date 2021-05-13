var indexSlide = 1;
displaySlide(indexSlide);

function goTo(x) {
    displaySlide(indexSlide += x);
}

function position(x) {
    displaySlide(indexSlide = x);
}

function displaySlide(x) {
    var slide = document.getElementsByClassName("slider-image");
    var dotButton = document.getElementsByClassName("dot-item");
    var index;

    if(x > slide.length) {
        indexSlide = 1;
    }
    if(x < 1) {
        indexSlide = slide.length;
    }

    for(index = 0; index < slide.length; index++) {
        slide[index].style.display = "none";
    }

    slide[indexSlide-1].style.display = "block";
}