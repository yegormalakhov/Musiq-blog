import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
import { Typography, Container, Box, Grid } from "@mui/material";
import { Button } from "@mui/material";
// import { parseISO, formatDistance } from "date-fns";
import DatePosted from "./DatePosted";

const BlogPreview = ({ title, author, summary, postDate, heroImage }) => {
  // console.log(postDate);

  // const formatDate = (postDate) => {
  //   const convertedTimeFromIso = parseISO(postDate, {
  //     additionalDigits: 1,
  //   });
  //   const diff = formatDistance(new Date(convertedTimeFromIso), new Date(), {
  //     addSuffix: true,
  //   });
  //   return diff;
  // };

  const imageSeen = `http:${heroImage.fields.file.url}`;
  return (
    <div>
      <Typography variant="h4">{title}</Typography>
      <Grid container spacing={2}>
        
        <Grid item xs={9}>
          <Button
            component={Link}
            to={`/author/${author.sys.id}`}
            variant="text"
            color="secondary"
          >
            <Typography variant="overline">{author.fields.name}, </Typography>
          </Button>
          <span>posted </span>
          {/* {formatDate(postDate)}  */}
          <DatePosted date={postDate} />

          <Typography variant="body1">
            {documentToReactComponents(summary)}
          </Typography>
        </Grid>
        <Grid item xs={3} align='center'>
          <Box
            component="img"
            className="RockLogo blogImgPreview"
            alt="Logo"
            src={imageSeen}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogPreview;
