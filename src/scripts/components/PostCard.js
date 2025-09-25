const posts = [
    {
        author: { name: "Maria Clara", avatar: "../images/users/user1.jpg" },
        date: "09 Jun 2025",
        title: "Tendências de Tecnologia para 2026",
        text: "A transformação digital segue acelerando e, para 2026...",
        image: "../images/articles/post1/imagem1-article.png",
        likes: 50,
        comments: 3,
    },
    {
        author: { name: "Pedro Aguiar", avatar: "../images/users/user2.jpg" },
        date: "08 Jun 2025",
        title: "Inteligência Artificial no dia a dia",
        text: "Cada vez mais, a IA está presente em nossas vidas...",
        image: "../images/articles/post2/imagem2-article.jpeg",
        likes: 120,
        comments: 15,
    },
    {
        author: { name: "Sabrina Souza", avatar: "../images/users/user3.jpg" },
        date: "07 Jun 2025",
        title: "5 Dicas para Segurança Digital",
        text: "Com o crescimento das ameaças virtuais, é importante...",
        image: "../images/articles/post3/imagem3-article.jpeg",
        likes: 80,
        comments: 10,
    },
];

function PostCard({ author, date, title, text, image, likes, comments }) {
    return (
        <div className="post-card">
            <a href="article.html">
                {/* Cabeçalho com avatar e autor */}
                <div className="post-header">
                    <img src={author.avatar} alt={author.name} className="avatar" />
                    <div>
                        <strong>{author.name}</strong>
                        <p className="date">{date}</p>
                    </div>
                </div>

                {/* Conteúdo principal */}
                <div className="post-body">
                    <div className="post-content">
                        <h3 className="post-title">{title}</h3>
                        <p className="post-text">{text}</p>
                    </div>
                    {image && <img src={image} alt={title} className="post-image" />}
                </div>

                {/* Rodapé */}
                <div className="post-footer">
                    <span>
                        <i className="bi bi-heart"></i> {likes}
                    </span>
                    <span>
                        <i className="bi bi-chat"></i> {comments}
                    </span>
                </div>
            </a>
        </div>
    );
}
