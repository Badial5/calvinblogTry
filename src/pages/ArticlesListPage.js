import articles from "../Data/article/article-content"

const ArticlesListPage = () => {
    return (
        <>
        <h1>Articles</h1>

            {articles.map(articlename => (

                <h2>{articlename.title}</h2>
            ))}

        </>
    );
}

export default ArticlesListPage;