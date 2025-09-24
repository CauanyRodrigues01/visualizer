const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <div className="new-post">
            <h2 className="form-title">Envie a sua postagem acadêmica aqui</h2>
            <NewPost />
        </div>
        <NavBar />
    </div>
);
