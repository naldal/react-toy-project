const addBtn = document.getElementById("add");
const noteEl = document.querySelector("notes");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector("delete");
const main = document.querySelector(".main");
const textarea = document.querySelector("textarea");

addBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote() {
    const note = document.createElement("div");
    note.classList.add("notes");

    note.innerHTML = `
    <div class="notes">
        <div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        <div class="main hidden"></div>
        <textarea></textarea>
    </div>;`;

    document.body.appendChild(note);
}

editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
});

deleteBtn.addEventListener("click", () => {
    alert("Aa");
    note.remove();
});

textarea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
});
