let image1 = document.getElementById ('image1')
let image2 = document.getElementById ('image2')
let slide1 = document.getElementById ('slide1')
let slide2 = document.getElementById ('slide2')
let menu = document.getElementById ('menu')
let count = 1

document.getElementById ('radio1').checked = true;

setInterval ( function() {
    nextImage ();
}, 4000);

function nextImage () {
    count++;
    if (count > 2) {count=1};

    document.getElementById ('radio' + count).checked = true;
}

function clickMenu () {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    }
    else {
        menu.style.display = 'none'
    }
};

