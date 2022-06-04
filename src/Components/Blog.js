import { useParams, Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import GoBack from "./GoBack";
import { Typography, Paper, Button } from "@mui/material";

const Blog = (data) => {
  const { blogId } = useParams();
  const blogList = data.data;
  const targetedBlog = blogList.find((blog) => {
    return blog.sys.id === blogId;
  });

  console.log(targetedBlog.fields.postDate);
  return (
    <div>
      <Paper className="blog" elevation={2}>
        <Typography variant="h3">{targetedBlog.fields.title}</Typography>
        <Typography variant="overline">
          <Button
            component={Link}
            to={`/author/${targetedBlog.fields.author.sys.id}`}
            variant="text"
            color="secondary"
          >
            {targetedBlog.fields.author.fields.name}
          </Button>
          , {targetedBlog.fields.postDate}
        </Typography>
        <Typography variant="body1">
          {documentToReactComponents(targetedBlog.fields.description)}
        </Typography>
        <GoBack />
      </Paper>
    </div>
  );
};

export default Blog;
