const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Header />
        <SearchBar />
        <main>
            <PostCard
                author={{ name: "Pedro Arthur", avatar: "../images/logo-favicon.png" }}
                date="09 Jun 2025"
                title="Tendências de Tecnologia para 2026"
                text="A transformação digital segue acelerando e, para 2026..."
                image="../images/logo-favicon.png"
                likes={50}
                comments={3}
            />
            <PostCard
                author={{ name: "Pedro Arthur", avatar: "../images/logo-favicon.png" }}
                date="09 Jun 2025"
                title="Tendências de Tecnologia para 2026"
                text="A transformação digital segue acelerando e, para 2026..."
                image="../images/logo-favicon.png"
                likes={50}
                comments={3}
            />
            <PostCard
                author={{ name: "Pedro Arthur", avatar: "../images/logo-favicon.png" }}
                date="09 Jun 2025"
                title="Tendências de Tecnologia para 2026"
                text="A transformação digital segue acelerando e, para 2026..."
                image="../images/logo-favicon.png"
                likes={50}
                comments={3}
            />
        </main>
        <NavBar />
    </div>
);
