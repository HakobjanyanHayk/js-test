document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("addButton") as HTMLButtonElement;
    const itemList = document.getElementById("itemList") as HTMLUListElement;

    button.addEventListener("click", () => {
        const newItem = document.createElement("li");
        newItem.textContent = `Item ${itemList.children.length + 1}`;
        itemList.appendChild(newItem);
    });
});