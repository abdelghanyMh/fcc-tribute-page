//hide the date text  and wait for other animations to complete;
var dateText = document.querySelector('.letters').innerHTML;
document.querySelector('.letters').innerHTML = ''

// animations duration/delay control
let fistAnimDuration = 500;
let secondAnimDuration = 50;
let secondAnimdelay = fistAnimDuration * 1.9;
let thirdAnimDuration = 300;
let thirdAnimdelay = secondAnimdelay + 33 * secondAnimDuration; // 33 letter

/**
 *  .ml3 animation
 *  for the text : 'Dr. Norman Borlaug'
 *  source :https://tobiasahlin.com/moving-letters/#3
*/
var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: fistAnimDuration,
    delay: (el, i) => 100 * (i + 1)
});

/**
 *  typeWriter animation
 *  for the text : 'The Man Who Saved A Billion Lives'
 *  
*/


const writingEl = document.querySelector(".writing-text");
const text = writingEl.innerHTML;
writingEl.innerHTML = "";
let index = 0;

// secondAnimdelay used to make sure that ml3 animation start first

setTimeout(function () {
    // adding letter each iteration 
    const interval = setInterval(function appendLetter() {
        writingEl.innerHTML = text.substring(0, index++);
        if (index == text.length + 1) clearInterval(interval);
    }, secondAnimDuration);

}, secondAnimdelay);



// thirdAnimdelay used to make sure that typeWriter animation start first
setTimeout(function () {
    // line animation 
    const line = document.querySelector('.line');
    line.style.visibility = 'visible'
    line.style.opacity = 1

/**
 *  data animation
 *  for the text : '1914 - 2009'
*/
    var textWrapper = document.querySelector('.letters');
    textWrapper.innerHTML = dateText.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
        .add({
            targets: '.letter',
            translateY: ["1.1em", 0],
            translateX: ["0.55em", 0],
            translateZ: 0,
            rotateZ: [180, 0],
            duration: thirdAnimDuration,
            easing: "easeOutExpo",
            delay: (el, i) => 50 * i
        })
}, thirdAnimdelay)


/**
this code snippets responsible for:
    - switch between /img/default.jpg and /img/highlight.jpg
*/
const img = document.getElementById("image");
function mouseoverHandler() {
    img.src = "resources/images/highlight.jpg";
}
function mouseoutHandler() {
    img.src = "resources/images/default.jpg";
}
["mouseover", "ontouchstart"].forEach((event) => {
    img.addEventListener(event, mouseoverHandler);
});
img.addEventListener("mouseout", mouseoutHandler);

