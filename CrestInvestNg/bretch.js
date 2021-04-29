const menuList = document.querySelectorAll(".navbar-nav li a");

menuList.forEach(menu => {
    menu.addEventListener("click", function () {
        menuList.forEach(menu => menu.classList.remove("brand"));
        menu.classList.add("brand");
    });
});


