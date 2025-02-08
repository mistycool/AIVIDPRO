// Add any interactivity here, such as toggling sections or dynamic updates
console.log("JavaScript is ready!");

// Highlight active menu item
document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".menu-item").forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});
