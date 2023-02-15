let slideNo = 0;

function controller(x){
    slideNo = slideNo + x;
    slideshow(slideNo);
}

slideshow(slideNo);

function slideshow(num){
    let slides = document.getElementsByClassName("slide");

    if(num == slides.length){
        slideNo = 0;
        num = 0;
    }
    if(num<0){
        slideNo = slides.length - 1;
        num = slides.length - 1;
    }

    for(let slide of slides){
        slide.style.display = "none";
    }

    slides[num].style.display = "block";
}