import { Link } from "react-router-dom"

//pages

//article content data
import articles from "../Data/article/article-content";


//we import the article content and wrap link around to send us to the
//actual article
//Link - use template literals and send it to article name bcos we use find
//at the artcile page to send us to the page

const ArticlesListPage = () => {
    return (
        <>
        <h1>Articles</h1>
        {
            
            articles.map(article => (
                <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}> 
                <div>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                </div>

                </Link>
            ))

        }


        </>
    );
}

export default ArticlesListPage;