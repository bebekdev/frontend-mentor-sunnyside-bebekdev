const toggleBtn = document.getElementById("toggle-btn")

toggleBtn.addEventListener("click", navToggle)

function navToggle() {
    const toggleBtn = document.getElementById("navbar-collapse")
    toggleBtn.classList.toggle("hidden");
}
