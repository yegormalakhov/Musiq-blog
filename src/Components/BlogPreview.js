import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
// import { parseISO, formatDistance } from "date-fns";
import DatePosted from "./DatePosted";

const BlogPreview = ({ title, author, summary, postDate }) => {
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

  return (
    <div>
      <Typography variant="h4">{title}</Typography>
      <Button
        component={Link}
        to={`/author/${author.sys.id}`}
        variant="text"
        color="secondary"
      >
        <Typography variant="overline">{author.fields.name}, </Typography>
      </Button>      
      <span>posted  </span>
      {/* {formatDate(postDate)}  */}
      <DatePosted date={postDate} />
      <Typography variant="body1"> 
        {documentToReactComponents(summary)}
      </Typography>
    </div>
  );
};

export default BlogPreview;
