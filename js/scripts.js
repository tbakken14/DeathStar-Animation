const ccw_button = document.getElementById("rotate-ccw");
const fire_button = document.getElementById("fire");
const cw_button = document.getElementById("rotate-cw");
const laser = document.getElementById("laser");

let angle = -50;

ccw_button.addEventListener("click", rotate_ccw);
cw_button.addEventListener("click", rotate_cw);
fire_button.addEventListener("click", fire);

function rotate_ccw() {
    angle -= 15;
    laser.style.transform = 'translate(-50%, -50%) rotate(' + angle + 'deg)';
}

function rotate_cw() {
    angle += 15;
    laser.style.transform = 'translate(-50%, -50%) rotate(' + angle + 'deg)';
}

function fire() {
    laser.style.opacity = 100;
}