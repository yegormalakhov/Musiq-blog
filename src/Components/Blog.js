import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import GoBack from "./GoBack";
import { Typography, Paper, Grid, Box } from "@mui/material";
import ShareLikeBlock from "./ShareLikeBlock.js";

const Blog = (data) => {
  const { blogId } = useParams();
  const blogList = data.data;
  const targetedBlog = blogList.find((blog) => {
    return blog.sys.id === blogId;
  });

  // console.log(targetedBlog.fields);
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
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item sm={10}>
              <GoBack />
            </Grid>
            <Grid item sm={2}>
              <Box>
                <ShareLikeBlock />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default Blog;
