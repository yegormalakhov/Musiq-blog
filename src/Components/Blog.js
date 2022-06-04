import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import GoBack from "./GoBack";
import { Typography, Paper } from "@mui/material";

const Blog = (data) => {
  const { blogId } = useParams();
  const blogList = data.data;
  const targetedBlog = blogList.find((blog) => {
    return blog.sys.id === blogId;
  });

  console.log(targetedBlog.fields);
  return (
    <div>
      <Paper className="blog" elevation={2}>
        <Typography variant="h3">{targetedBlog.fields.title}</Typography>
        <Typography variant="overline">
          {targetedBlog.fields.author.fields.name}, posted on date
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
