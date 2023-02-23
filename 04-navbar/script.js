// 1:11:29

// classList => get all classes
// contains => check classList for specific class
// add => add class
// remove => remove class
// toggle => toggle class

let navToggle = document.querySelector(".nav_toggle");
let links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    // console.log(links.classList);
    // console.log(links.classList.contains("random")); // false
    // console.log(links.classList.contains("links")); // true

    // if (links.classList.contains("show_links")){
    //     links.classList.removve("show_links");
    // } else {
    //     links.classList.add("show_links");
    // }

    links.classList.toggle("show_links");
})