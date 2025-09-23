document.addEventListener("DOMContentLoaded", () => {
  const returnButton = document.querySelector(".icon-return");

  returnButton.addEventListener("click", (event) => {
    // Evita o comportamento padrão do link (navegar para o href)
    event.preventDefault();
    // Volta para a página anterior do histórico do navegador
    window.history.back();
  });

  const headerContent = document.querySelector(".header-content");

  // Ir para a página de perfil ao clicar no cabeçalho do artigo
  headerContent.addEventListener("click", () => {
    window.location.href = "../pages/profile.html";
  });


});
