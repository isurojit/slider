//Primitive Data type
//Number
//String
//JavaScript is dynamic programming language
// var number = true;

// console.log(number);
//alert
// alert('The sum is '+(4+5));

/*
1)write a function to print factorial of a number.function name- getFactorial
2)Write a function that will create your element and append to body- createElement
3)write a program with eventListener that will print in body when even button clicks. 
*/ 



// function elementCreator(typeOfElement, text){
//     typeOfElement = document.createElement(typeOfElement);
//     typeOfElement.innerText =text;
//     document.body.appendChild(typeOfElement);
// }

// elementCreator("button","Hover Me")


// function imageCreator(source){
//     typeOfElement = document.createElement('img');
//     typeOfElement.src = source;
//     document.body.appendChild(typeOfElement);
// }

// imageCreator("https://cdn.vox-cdn.com/thumbor/3ajecDMOIH59cbOeyO0bap_4wj4=/0x0:2257x1320/1200x800/filters:focal(949x480:1309x840)/cdn.vox-cdn.com/uploads/chorus_image/image/63738986/pokemon.0.0.png");


// function buttonCreator(btnText, backgroundColor, textColor){
//     let button = document.createElement('button');
//     button.innerText = btnText;
//     button.style.cssText = `background-color: ${backgroundColor}; color: ${textColor};p;border: none;cursor: pointer; outline: none; padding: 14px 20px;font-size:2rem`
//     document.body.appendChild(button);
// }


// buttonCreator("Click Me", "black" ,"white");
// buttonCreator("Click Me", "black" ,"white");
// buttonCreator("Click Me", "black" ,"white");
// buttonCreator("Click Me", "black" ,"white");
// buttonCreator("Click Me", "black" ,"white");
// buttonCreator("Click Me", "black" ,"white");


// function getFactorial(num1){
//     var multiply = 1;
//     for(var i=1; i <= num1; i++){
//         multiply = multiply * i;
//     }
//     return multiply
// }
// console.log(getFactorial(10));


/*
1) Program to Check Disarium number

Input:

num = 175  
Output:

1^1 + 7^2 + 5^3 = 1 + 49 + 125 = 175
175 is a disarium number
*/


// function disariumNumber(num){
//    var firstRemainder = num % 10;
//    var secondRemainder = firstRemainder % 10;
//    var firstResult = Math.floor(num/10);
//    var thirdResult = Math.floor(firstResult%10);
//    var secondResult = Math.floor(firstResult /10);
//    console.log(firstRemainder,secondResult,thirdResult);
//    if(((firstRemainder*firstRemainder)+(thirdResult*thirdResult)+(secondResult*secondResult)) === num ){
//        return "it is Disarium Number";
//    }else{
//         return "it is not Disarium Number";
//    }
// }

// console.log(disariumNumber(175));

// const list = document.querySelectorAll('.list-items')

// list.addEventListener('click', function(e){
//     console.log("Clicked");
// });

// for(let i = 0; i < list.length; i++){
//     list[i].addEventListener("Click", function(e){
//         console.log("Clicked");
//     })
// }


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