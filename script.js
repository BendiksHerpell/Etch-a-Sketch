
let slideBar = document.getElementById("slideBar");
let output = document.getElementById("demo");

output.innerHTML = slideBar.value;

slideBar.oninput = function() {
    let x = this.value;
    output.innerHTML = this.value;
    //chatgpt
    updateGrid(x);
  };



let x = slideBar.value;
let mainDiv = document.getElementById("mainDiv");

mainDiv.style.width = "662px";
mainDiv.style.height = "662px";

createGrid(x)

function createGrid(x) {
    let mainDiv = document.getElementById("mainDiv")
    for (let rows = 0; rows < x; rows++) {
        for(let columns = 0; columns < x; columns++){
        let div = document.createElement("div");
        div.className = "grid";
        mainDiv.appendChild(div);
        }
    }
}

function updateGrid(x) {
    let mainDiv = document.getElementById("mainDiv");
    mainDiv.innerHTML = ""; // Clear existing grid elements
    let cellSize = 660 / x;

    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            let div = document.createElement("div");
            div.className = "grid";
            div.style.width = cellSize + "px";
            div.style.height = cellSize + "px";
            mainDiv.appendChild(div);

    div.addEventListener("mouseover", colorBlack);
    document.getElementById("rainbow").onclick = div.addEventListener("mouseover", colorRainbow)
    
        }
    }
}

let cellSize = 660/x;
let gridElements = document.querySelectorAll(".grid");


gridElements.forEach(function(Element){
    Element.style.width = cellSize + "px";
    Element.style.height = cellSize + "px";
    Element.addEventListener("mouseover", colorBlack)
})

let rainbowButton = document.getElementById('rainbow');

rainbowButton.addEventListener('click' , function() {

    gridElements.forEach(function(Element){
        Element.style.width = cellSize + "px";
        Element.style.height = cellSize + "px";
        Element.addEventListener("mouseover", colorRainbow)
    })
    });





function colorBlack(){
    this.style.backgroundColor = "black";
}
    
function colorRainbow() {
  let symbols = "0123456789ABCDEF";
  let color = "#"

  for(let i = 0; i<6; i++){
    color = color + symbols[Math.floor(Math.random() * 16)];
        }
  this.style.backgroundColor = color;

}
