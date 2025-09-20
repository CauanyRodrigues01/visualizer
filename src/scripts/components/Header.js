function Header() {
    const [hide, setHide] = React.useState(false);

    React.useEffect(() => {
        let lastScrollY = 0;

        function handleScroll() {
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                setHide(true); // rolando pra baixo → esconde
            } else {
                setHide(false); // rolando pra cima → mostra
            }
            lastScrollY = window.scrollY;
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`app-header ${hide ? "hide" : ""}`}>
            <img src="../images/logo-apenas-letras.png" alt="Visualizer logo" className="logo" />
            <p className="subtitle">Mostre seu trabalho. Inspire novas descobertas.</p>
        </header>
    );
}
