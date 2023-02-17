let colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 - 3 (the array has 4 items)
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

// Practice projects via youtube
