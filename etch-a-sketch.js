const container = document.querySelector("#container");

function createGrid (size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        container.appendChild(div);
    }
}