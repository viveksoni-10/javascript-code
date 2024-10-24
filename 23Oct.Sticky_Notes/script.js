let addBtn = document.querySelector("#add_note");
let color = document.querySelector("#color");
let input = document.getElementById("text_area");
let right_box = document.querySelector(".right-box");
const sms = document.querySelector("#massege");

addBtn.addEventListener("click", () => {
    if (input.value === ""){
        alert("Please enter some tex");
        return;
    }
    sms.style.display = "none";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let crosicon = document.createElement("button");

    // Add text and color to the new note
    div.style.backgroundColor = color.value;
    
    // Apply styles to the div
    div.style.position = "relative"; 
    div.style.padding = "10px";
    div.style.borderRadius = "7px";
    div.style.width = "10rem";
    div.style.height = "10rem";

    p.innerText = input.value;
    p.style.display = "flex";
    p.style.textWrap = "break-word";
    

    // Apply styles to the crosicon button
    crosicon.style.position = "absolute"; 
    crosicon.style.top = "5px";   
    crosicon.style.right = "5px";   
    crosicon.style.fontSize = "20px";   
    crosicon.style.width= "20px";
    crosicon.innerText = 'X';
    crosicon.style.cursor = "pointer";
    
    // Append the elements to the p
    div.appendChild(p);
    div.appendChild(crosicon);

    // Append the div to the right_box
    right_box.appendChild(div);
    // input.value = "";

    crosicon.addEventListener('click', ()=>{
        div.style.display = "none";
    })

});

document.getElementById("reset_btn").addEventListener("click",()=>{
    right_box.innerHTML = "";
    sms.style.display = "contents";
})


