import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../contentful/client";
import GoBack from "./GoBack";
import BlogPreview from "./BlogPreview";

const Author = () => {
    const { authorId } = useParams();
    const [articles, setArticles] = useState();

    useEffect(() => {
        client.getEntries({
            content_type: "article",
            "fields.author.sys.id": authorId
        })
        .then(data => setArticles(data))
    }, [])

    // const articlesList = articles.items
    // console.log(articles.items)
    // console.log(articles)

    if (!articles) {
        return <h1>Loading...</h1>;
      }

      const articlesList = articles.items
      console.log(articles.items)
      console.log(articles)
    return (
        <div>
            {articlesList.map((article,index)=> (
                <BlogPreview {...article.fields} key={index}/>
            ))}
        
        </div>
    )

}

export default Author; 