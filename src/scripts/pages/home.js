const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Header />
        <main className="mainStyled">
            <SearchBar />
            {posts.map((post, index) => (
                <PostCard
                    key={index}
                    author={post.author}
                    date={post.date}
                    title={post.title}
                    text={post.text}
                    image={post.image}
                    likes={post.likes}
                    comments={post.comments}
                />
            ))}
        </main>
        <NavBar />
    </div>
);
