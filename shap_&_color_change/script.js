let shapArray = ['square', 'trangle', 'hexagon', 'pentogon', 'rightPoint', 'heptagon', 'leftPoint', 'rabbet', 'leftAero', 'rightAero', 'leftChevron', 'rihtChevron', 'cross', 'frame', 'close', 'messege'];

let color_box = document.querySelector(".color-box");
let color_change = document.getElementById("color_change");
let shap_box = document.querySelector(".shap-box");
let shap_change = document.getElementById("shap_change");

color_change.addEventListener("click",()=>{
    color_box.style.backgroundColor = radomColor();
});

shap_change.addEventListener("click", () => {
    shap_box.className = 'shap-box';
    shap_box.classList.add(randomShap());
    shap_box.style.height = "45%";
    shap_box.style.width = "45%";
});


function radomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`    
}

function randomShap(){
    let shap = shapArray[Math.floor(Math.random() * shapArray.length)];
    return shap;
}
