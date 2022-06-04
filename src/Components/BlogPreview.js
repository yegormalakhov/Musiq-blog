import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Paper, Button } from "@mui/material";
import { parseISO, formatDistance } from "date-fns";
import DatePosted from "./DatePosted";

const BlogPreview = ({ title, author, description, summary, postDate }) => {
  console.log(postDate);

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
      <Typography variant="overline">
        <Button
          component={Link}
          to={`/author/${author.sys.id}`}
          variant="text"
          color="secondary"
        >
          {author.fields.name}
        </Button>
        , posted 
        {/* {formatDate(postDate)}  */}
        <DatePosted date={postDate} />
      </Typography>
      <Typography variant="body1">
        {documentToReactComponents(summary)}
      </Typography>
    </div>
  );
};

export default BlogPreview;
