let x = 32;

createGrid(x)

mainDiv.style.width = "962px";
mainDiv.style.height = "962px";

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

let cellSize = 960/x;
let gridElements = document.querySelectorAll(".grid");

gridElements.forEach(function(Element){
    Element.style.width = cellSize + "px";
    Element.style.height = cellSize + "px";
    Element.addEventListener("mouseover", colorBlack)
})



function colorBlack(){
    this.style.backgroundColor = "black";
}

