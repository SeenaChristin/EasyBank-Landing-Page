const toggleBtn = document.getElementById("hamb-btn");
const modal = document.getElementById("modal");

toggleBtn.addEventListener("click", () => {
  modal.classList.toggle("modal-inactive");
  toggleBtn.classList.toggle("hamburger");
  toggleBtn.classList.toggle("toggle-btn--x");
});
