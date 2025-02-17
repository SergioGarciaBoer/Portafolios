document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#cc5500";
        });
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "#ff6600";
        });
    });
});