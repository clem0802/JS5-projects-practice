// 44:00
let reviews = [
    {
        id: 0,
        name: "0-catty kitty",
        job: "food inspector",
        img: "cat.jpg",
        text: `Lorem ipsum dolor, 
        sit amet consectetur adipisicing elit. 
        Provident ea atque, dolore similique itaque 
        est officiis fugiat harum tempore pariatur.`
    },
    {
        id: 1,
        name: "1-puppy doggy",
        job: "banker",
        img: "dog.jpg",
        text: `Lorem ipsum dolor, 
        sit amet consectetur adipisicing elit. 
        Provident ea atque, dolore similique itaque 
        est officiis fugiat harum tempore pariatur.`
    },
    {
        id: 2,
        name: "2-bunny rabbit",
        job: "lawyer",
        img: "rabbit.jpg",
        text: `Lorem ipsum dolor, 
        sit amet consectetur adipisicing elit. 
        Provident ea atque, dolore similique itaque 
        est officiis fugiat harum tempore pariatur.`
    },
    {
        id: 3,
        name: "3-lamby lambo",
        job: "teacher",
        img: "lamb.jpg",
        text: `Lorem ipsum dolor, 
        sit amet consectetur adipisicing elit. 
        Provident ea atque, dolore similique itaque 
        est officiis fugiat harum tempore pariatur.`
    },
    {
        id: 4,
        name: "4-hamzy hamster",
        job: "cook",
        img: "hamster.jpg",
        text: `Lorem ipsum dolor, 
        sit amet consectetur adipisicing elit. 
        Provident ea atque, dolore similique itaque 
        est officiis fugiat harum tempore pariatur.`
    }
]

// get all the items of the reviewers array
let img = document.getElementById("reviewer_img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");

let btnPrev = document.querySelector(".btn_prev");
let btnNext = document.querySelector(".btn_next");
let btnRandom = document.querySelector(".btn_random");

// set initial item (reviewer)
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function(){
    // console.log("test window loading");
    showReviewer(currentItem);
})

// show reviewer based on item
function showReviewer(reviewer){
    // let item = reviews[currentItem]; // same as next line
    let item = reviews[reviewer];

    // img.src = reviews[currentItem].img // same as next line
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// btn_prev: show previous reviewer
btnPrev.addEventListener("click", function(){
    currentItem--;

    if(currentItem < 0) {
        currentItem = reviews.length -1;
    }
    showReviewer(currentItem);
})

// btn_next: show next reviewer
btnNext.addEventListener("click", function(){
    currentItem++;

    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showReviewer(currentItem);
})

// btn_random: show random reviewer
btnRandom.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showReviewer(currentItem);
})