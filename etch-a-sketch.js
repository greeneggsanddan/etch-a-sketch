const container = document.querySelector("#container");

function createGrid (size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "black";
            });
            if (i == size -1) {
                div.classList.add("grid-bottom");
            } else {
                div.classList.add("grid");
            }
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

function removeGrid() {
}

const smallButton = document.querySelector("#small");
smallButton.addEventListener("click", () => {
    document.getElementById("container").innerHTML = "";
    createGrid(10);
});

const mediumButton = document.querySelector("#medium");
mediumButton.addEventListener("click", () => {
    document.getElementById("container").innerHTML = "";
    createGrid(25);
});

const largeButton = document.querySelector("#large");
largeButton.addEventListener("click", () => {
    document.getElementById("container").innerHTML = "";
    createGrid(50);
});

createGrid(10);