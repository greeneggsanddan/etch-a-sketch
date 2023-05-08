const screen = document.querySelector("#screen");

function createGrid (size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "#0F380F";
            });
            div.classList.add("grid");
            row.appendChild(div);
        }
        screen.appendChild(row);
    }
}

function clearGrid() {
    const divs = document.querySelectorAll(".grid");
    divs.forEach(div => {
        div.style.backgroundColor = "#CADC9F";
    });
}

function removeGrid() {
}   

const smallButton = document.querySelector("#small");
smallButton.addEventListener("click", () => {
    document.getElementById("screen").innerHTML = "";
    createGrid(12);
});

const mediumButton = document.querySelector("#medium");
mediumButton.addEventListener("click", () => {
    document.getElementById("screen").innerHTML = "";
    createGrid(25);
});

const largeButton = document.querySelector("#large");
largeButton.addEventListener("click", () => {
    document.getElementById("screen").innerHTML = "";
    createGrid(50);
});

const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", clearGrid);

createGrid(12);