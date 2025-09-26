function NavBar() {
    const [active, setActive] = React.useState("home");

    function goTo(page, href) {
        setActive(page); // muda o botão ativo
        window.location.href = href; // redireciona para outro HTML
    }

    return (
        <div className="bottom-nav">
            <button
                className={active === "home" ? "active" : ""}
                onClick={() => goTo("home", "home.html")}
            >
                <i className="bi bi-house"></i>
                Home
            </button>

            <button
                className={active === "search" ? "active" : ""}
                onClick={() => setActive("search")}
            >
                <i className="bi bi-search"></i>
                Procurar
            </button>

            <button className="plus-btn" onClick={() => goTo("new", "request-build.html")}>
                <i className="bi bi-plus"></i>
            </button>

            <button
                className={active === "saved" ? "active" : ""}
                onClick={() => setActive("saved")}
            >
                <i className="bi bi-bookmark"></i>
                Salvos
            </button>

            <button
                className={active === "profile" ? "active" : ""}
                onClick={() => setActive("profile")}
            >
                <i className="bi bi-person"></i>
                Perfil
            </button>
        </div>
    );
}
