const button = document.getElementById ("share-button");
const popup = document.getElementById("share-popup");

button.addEventListener("click", () => {
    popup.classList.toggle("active");
});
document.addEventListener("click", (e) => {
    if (!button.contains(e.target) && !popup.contains(e.target)) {
        popup.classList.remove("active");
    }
});