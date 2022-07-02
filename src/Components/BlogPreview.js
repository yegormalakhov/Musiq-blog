import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
import { Typography, Container, Box, Grid } from "@mui/material";
import { Button } from "@mui/material";
// import { parseISO, formatDistance } from "date-fns";
import DatePosted from "./DatePosted";
import { useEffect, useState } from "react";
import serverURL from "../serverURL.js";

const BlogPreview = ({ id }) => {
  const [blogPreview, setBlogPreview] = useState();
  useEffect(() => {
    fetch(`${serverURL}/routes/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogPreview(data[0]);
      });
  }, []);

  if (!blogPreview) {
    return <h1>Loading...</h1>;
  }

  // const formatDate = (postDate) => {
  //   const convertedTimeFromIso = parseISO(postDate, {
  //     additionalDigits: 1,
  //   });
  //   const diff = formatDistance(new Date(convertedTimeFromIso), new Date(), {
  //     addSuffix: true,
  //   });
  //   return diff;
  // };

  return (
    <div>
      <Typography variant="h4">{blogPreview.title}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Button
            component={Link}
            to={`/author/${blogPreview.author_id}`}
            variant="text"
            color="secondary"
          >
            <Typography variant="overline">{blogPreview.name}, </Typography>
          </Button>
          <span>posted </span>
          {/* {formatDate(postDate)}  */}
          <DatePosted date={blogPreview.created_at} />
          <div dangerouslySetInnerHTML={{ __html: blogPreview.summary }}></div>

          {/* <Typography variant="body1">
            {documentToReactComponents(summary)}
          </Typography> */}
        </Grid>
        <Grid item xs={3} align="center">
          <Box
            component="img"
            className="RockLogo blogImgPreview"
            alt="Logo"
            src={`${serverURL}/images/${blogPreview.hero_img}`}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogPreview;
