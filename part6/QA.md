## Question/Answer of `Part 6`

* Why `document.addEventListener("DOMContentLoaded", ...)` is used instead of placing the script at the bottom of the `HTML` file?
* How the project would handle adding complex elements (e.g., nested lists) to the list?

## `document.addEventListener("DOMContentLoaded", ...)` is used  because:
* Using document.addEventListener("DOMContentLoaded", ...) ensures that the DOM is fully loaded and parsed before any JavaScript code attempts to interact with it. This approach has a few benefits:


## nested lists will be implemented:
* We should modify `app.ts`

```typescript
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("addButton") as HTMLButtonElement;
    const itemList = document.getElementById("itemList") as HTMLUListElement;

    button.addEventListener("click", () => {
        const newItem = document.createElement("li");
        newItem.textContent = `Item ${itemList.children.length + 1}`;   

        // Create a nested list
        const nestedList = document.createElement("ul");
        const nestedItem = document.createElement("li");
        nestedItem.textContent = `Nested Item 1`;
        nestedList.appendChild(nestedItem);

        newItem.appendChild(nestedList);
        itemList.appendChild(newItem);
    });
});

```