"use strict";

const images = ["images/slide1.jpeg","images/slide2.jpeg","images/slide3.JPG","images/slide4.jpg"]
let current = 0;
    
function changeImage(num) {
    if(current + num >= 0 && current + num < images.length) {
        current += num;
        document.getElementById('main_image').src = images[current];
        pageNum();
    }
};

function pageNum() {
    document.getElementById('page').textContent = `${current + 1}/${images.length}`;
}

pageNum();

document.getElementById('prev').onclick = function() {
    changeImage(-1);
};
document.getElementById('next').onclick = function() {
    changeImage(1);
};