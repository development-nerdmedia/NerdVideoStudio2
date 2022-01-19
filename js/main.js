document.addEventListener("click", function (e) {
    if (e.target.closest(".switch")) {
        document.querySelector('body').classList.toggle("dark-theme");
        // jQuery('body').addClass('dark-theme');
    }
    // if (e.target.closest(".cerrar")) {
    //     document.querySelector(".contactopage").classList.toggle("open");
    //     jQuery('body').removeClass('scrollhidden');
    // }
})