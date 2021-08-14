
const imgOne = document.querySelector('.image-one');
const imgTwo = document.querySelector('.image-two');
const imgThree = document.querySelector('.image-three');
const imgFour = document.querySelector('.image-four');
const rightBtn = document.querySelector('.right');
const leftBtn = document.querySelector('.left');

imgOne.style.display = "block";
imgTwo.style.display = "none";
imgThree.style.display = "none";
imgFour.style.display = "none";

let click = 0;
rightBtn.addEventListener("click", function(e){
    click = click + 1;
    if(click === 1){
        imgOne.style.display = "none";
        imgTwo.style.display = "block";
        imgThree.style.display = "none";
        imgFour.style.display = "none";
        imgTwo.style.animation= "slide-animation 800ms 1";
    }else if(click === 2){
        imgOne.style.display = "none";
        imgTwo.style.display = "none";
        imgThree.style.display = "block";
        imgFour.style.display = "none";
        imgThree.style.animation= "slide-animation 800ms 1";
    }else if(click === 3){
        imgOne.style.display = "none";
        imgTwo.style.display = "none";
        imgThree.style.display = "none";
        imgFour.style.display = "block";
        imgFour.style.animation= "slide-animation 800ms 1";
    }else{
        click = 0;
        imgOne.style.display = "block";
        imgTwo.style.display = "none";
        imgThree.style.display = "none";
        imgFour.style.display = "none";
        imgOne.style.animation= "slide-animation 800ms 1";
    }
});

let clickNew = 0;
leftBtn.addEventListener("click", function(e){
    clickNew = clickNew + 1;
    if(clickNew === 1){
        imgOne.style.display = "none";
        imgTwo.style.display = "block";
        imgThree.style.display = "none";
        imgFour.style.display = "none";
        imgTwo.style.animation= "slide-animation 800ms 1";
    }else if(clickNew === 2){
        imgOne.style.display = "none";
        imgTwo.style.display = "none";
        imgThree.style.display = "block";
        imgFour.style.display = "none";
        imgThree.style.animation= "slide-animation 800ms 1";
    }else if(clickNew === 3){
        imgOne.style.display = "none";
        imgTwo.style.display = "none";
        imgThree.style.display = "none";
        imgFour.style.display = "block";
        imgFour.style.animation= "slide-animation 800ms 1";
    }else{
        clickNew = 0;
        imgOne.style.display = "block";
        imgTwo.style.display = "none";
        imgThree.style.display = "none";
        imgFour.style.display = "none";
        imgOne.style.animation= "slide-animation 800ms 1";
    }
})
