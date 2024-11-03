let ratting = document.querySelector(".ratting");
let child = document.querySelectorAll(".child");
let btn = document.getElementById("btn");

let icon;
ratting.addEventListener("click",(eventObj)=>{
    let icon = eventObj.target.parentNode;
})

btn.addEventListener("click",()=>{
    console.log(icon);
})