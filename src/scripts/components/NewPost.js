function NewPost() {
    return (
        <form className="post-form">
            <input type="text" placeholder="Título" />

            <select>
                <option value="">Cursos</option>
                <option value="tecnologia">Tecnologia</option>
                <option value="engenharia">Engenharia</option>
                <option value="direito">Direito</option>
            </select>

            <select>
                <option value="">Tags</option>
                <option value="ia">Inteligência Artificial</option>
                <option value="cidades">Cidades Inteligentes</option>
                <option value="saude">Saúde Digital</option>
            </select>

            <input type="text" placeholder="Resumo" />

            <textarea placeholder="Texto do Artigo"></textarea>

            <input type="file" placeholder="Anexar imagens" />

            <button type="submit" className="submit-btn">
                Enviar solicitação
            </button>
        </form>
    );
}
