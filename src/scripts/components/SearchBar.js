function SearchBar() {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState("Cursos");

    const cursos = ["Todos", "Tecnologia", "Ciência", "Design", "Engenharia"];

    function handleSelect(curso) {
        setSelected(curso);
        setOpen(false);
    }

    return (
        <div className="search-bar-wrapper">
            <div className="search-bar">
                <div className="filter-wrapper">
                    <button className="filter-btn" onClick={() => setOpen(!open)}>
                        {selected} <i className="bi bi-chevron-down"></i>
                    </button>

                    {open && (
                        <ul className="dropdown">
                            {cursos.map((curso) => (
                                <li key={curso} onClick={() => handleSelect(curso)}>
                                    {curso}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="input-wrapper">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Procurar" />
                </div>
            </div>
        </div>
    );
}
