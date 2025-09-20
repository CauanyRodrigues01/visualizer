function PostCard({ author, date, title, text, image, likes, comments }) {
    return (
        <div className="post-card">
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
        </div>
    );
}
