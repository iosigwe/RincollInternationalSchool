document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".top-nav");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }
});

<script>
const menu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

menu.addEventListener("click", () => {
  navList.classList.toggle("active");
});
</script>
