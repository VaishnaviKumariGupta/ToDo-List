const btn = document.querySelector("button");
const inp = document.querySelector("input");
const taskList = document.querySelector(".task-list");
const errorMsg = document.querySelector("small");

btn.addEventListener("click", () => {
    const taskText = inp.value.trim();
    errorMsg.textContent = "";

    if (!taskText) {
        errorMsg.textContent = "Please enter a task!";
        return;
    }

    // Create row container
    const row = document.createElement("div");
    row.className = "row";

    // Create task item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        listItem.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => row.remove());

    // Append elements
    listItem.appendChild(checkbox);
    row.appendChild(listItem);
    row.appendChild(deleteBtn);
    taskList.appendChild(row);

    inp.value = "";
});
