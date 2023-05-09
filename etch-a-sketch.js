const screen = document.querySelector("#screen");
let colorPalette = "mono";

function createGrid (size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.addEventListener("mouseover", () => {
                if (colorPalette === "color") {
                    const random = Math.floor(Math.random() * 100);
                    console.log(random);
                    if (random < 25) {
                        div.style.backgroundColor = "#0F380F";
                    } else if (random < 50) {
                        div.style.backgroundColor = "#306230";
                    } else if (random < 75) {
                        div.style.backgroundColor = "#8BAC0F";
                    } else {
                        div.style.backgroundColor = "9BBC0F";
                    }
                } else {
                    div.style.backgroundColor = "#0F380F"
                }
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

const monoButton = document.querySelector("#mono");
monoButton.addEventListener("click", () => colorPalette = "mono");

const colorButton = document.querySelector("#color");
colorButton.addEventListener("click", () => colorPalette = "color");

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clearGrid);

createGrid(12);