import { useParams } from "react-router-dom";

//pages
import articles from "../Data/article/article-content"

const ArticlePage = () => {

    const {articleId} = useParams();

    //using js find method
    const article = articles.find(articleItem => articleItem.name === articleId)


    return (
        <>
       <h1>{article.title}</h1>
       <p>
        {
            article.content.map((content, i ) => (
                <p key={i}>{content}</p>
            ))
        }
       </p>

       </>
    );
}

export default ArticlePage;