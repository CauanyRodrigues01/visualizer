/* ===========================================
   SPLASH SCREEN DO INDEX.HTML
   =========================================== */

document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash-screen");

    setTimeout(() => {
        splash.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = "/src/pages/home.html";
        }, 300)
    }, 2000)
});