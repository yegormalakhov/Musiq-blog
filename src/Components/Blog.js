import { useParams, Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import GoBack from "./GoBack";
import { Typography, Paper, Grid, Box, Button, Container } from "@mui/material";
import ShareLikeBlock from "./ShareLikeBlock.js";
import DatePosted from "./DatePosted";

// client
// .getAssets()
// .then(function (assets) {
//   assets.items.map(function (asset) {
//     var imageURL = 'https:' + asset.fields.file.url;
//   });
// })
// .catch(function (e) {
//   console.log(e);
// });



const Blog = (data) => {
  const { blogId } = useParams();
  const blogList = data.data;

  

  const targetedBlog = blogList.find((blog) => {
    return blog.sys.id === blogId;
  });

  const imageSeen = `http:${targetedBlog.fields.heroImage.fields.file.url}`
 console.log(targetedBlog.fields.heroImage.fields.file.url);


  return (
    <div>
      <Paper className="blog" elevation={2}>
        {/* <img src></img> */}
        <Typography variant="h3">{targetedBlog.fields.title}</Typography>
        <Button
          component={Link}
          to={`/author/${targetedBlog.fields.author.sys.id}`}
          variant="text"
          color="secondary"
        >
          <Typography variant="overline">
            {targetedBlog.fields.author.fields.name},
          </Typography>
        </Button>
        <span>posted  </span>
         <DatePosted date={targetedBlog.fields.postDate} />
         <Container align='center'>
            <Box 
            component="img"
            className="RockLogo blogImg"
            alt="Logo"
            src={imageSeen}
          />
          </Container>
         
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
