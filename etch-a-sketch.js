const container = document.querySelector("#container");

function createGrid (size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
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

createGrid(10);