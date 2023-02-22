// 30:25
// set initial count to zero
let count = 0;

let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");
// console.log(btns); // NodeList(3)

btns.forEach(function(item){
    // console.log(item); 
    // <button>decrease</button>
    // <button>reset</button>
    // <button>increase</button>
    item.addEventListener("click", function(e){ // call-back function
        console.log(e.currentTarget);
        // <button>decrease</button>  ONLY shows the btn clicked
    })

    item.addEventListener("click", function(e){ // call-back function, e is the EVENT OBJECT
        console.log(e.currentTarget.classList);
        // 0: "btn"
        // 1: "decrease"
        // length: 2
        // value: "btn decrease"
    })

    item.addEventListener("click", function(e){
        let styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        } else if(styles.contains("increase")){
            count++;
        } else {
            count = 0;
        }

        if(count > 0){
            value.style.color = "green";
        } 
        if (count <0){
            value.style.color = "red";
        }
        if (count === 0){
            value.style.color = "black";
        }
        value.textContent = count;
    })
})