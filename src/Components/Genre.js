import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../contentful/client";
import BlogPreview from "./BlogPreview";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Paper, Button } from "@mui/material";

const Genre = () => {
  const { genreId } = useParams();
  const [genre, setGenre] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "article",
        "metadata.tags.sys.id[in]": genreId,
      })
      .then((data) => setGenre(data.items));
  }, [genreId]);

  if (!genre) {
    return <h1>Loading...</h1>;
  }

  console.log(genre);
  return (
    <div>
      {genre.map((article, index) => (
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
            {console.log(genre)}
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default Genre;
