/* ===========================================
   SPLASH SCREEN DO INDEX.HTML
   =========================================== */

document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash-screen");

    setTimeout(() => {
        splash.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = "./src/pages/home.html";
        }, 300)
    }, 2000)
});

/* ===========================================
   REGISTRO DO SERVICE WORKER
   =========================================== */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => console.log("Service Worker registrado:", reg))
      .catch((err) => console.log("Erro ao registrar SW:", err));
  });
}
