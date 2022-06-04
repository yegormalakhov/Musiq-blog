import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../contentful/client";
import GoBack from "./GoBack";
import BlogPreview from "./BlogPreview";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Author = () => {
  const { authorId } = useParams();
  const [articles, setArticles] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "article",
        "fields.author.sys.id": authorId,
      })
      .then((data) => setArticles(data));
  }, []);

  // const articlesList = articles.items
  // console.log(articles.items)
  // console.log(articles)

  if (!articles) {
    return <h1>Loading...</h1>;
  }

  const articlesList = articles.items;
  //   console.log(articles.items);
  //   console.log(articles);
  return (
    <div>
      {articlesList.map((article, index) => (
        <div key={index}>
          <Paper
            style={{
              padding: "30px",
              margin: "20px",
              backgroundColor: "#eceef1",
            }}
          >
            <BlogPreview {...article.fields} />
            <Button
              component={Link}
              to={`../${article.sys.id}`}
              variant="outlined"
              color="primary"
            >
              Read more
            </Button>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default Author;
