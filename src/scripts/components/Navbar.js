function NavBar() {
    const [active, setActive] = React.useState("home");

    return (
        <div className="bottom-nav">
            <button className={active === "home" ? "active" : ""} onClick={() => setActive("home")}>
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

            <button className="plus-btn">
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
