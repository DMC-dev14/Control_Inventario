const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");
const overlay = document.getElementById("sidebarOverlay");
const parent = document.querySelector(".parent");

function closeMobileSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

toggleBtn?.addEventListener("click", () => {
  parent.classList.toggle("sidebar-collapsed");
});

openBtn?.addEventListener("click", () => {
  sidebar.classList.add("open");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn?.addEventListener("click", closeMobileSidebar);
overlay?.addEventListener("click", closeMobileSidebar);