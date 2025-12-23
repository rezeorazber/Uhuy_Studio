const drawer = document.getElementById("drawer");
const btnMenu = document.getElementById("btnMenu");
const btnClose = document.getElementById("btnClose");
const year = document.getElementById("year");
const toast = document.getElementById("toast");
const leadForm = document.getElementById("leadForm");
const btnSearch = document.getElementById("btnSearch");

year.textContent = new Date().getFullYear();

function openDrawer() {
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
}
function closeDrawer() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
}

btnMenu?.addEventListener("click", openDrawer);
btnClose?.addEventListener("click", closeDrawer);

drawer?.addEventListener("click", (e) => {
  if (e.target === drawer) closeDrawer();
});

drawer?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => closeDrawer());
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

leadForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  if (!email) return;
  showToast("Mantap. Brief kamu masuk. (dummy, tapi tetap masuk)");
  leadForm.reset();
});

btnSearch?.addEventListener("click", () => {
  showToast("Search-nya dummy. Hidup juga dummy kadang.");
});
