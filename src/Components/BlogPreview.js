import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const BlogPreview = ({ title, author, description, summary }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="overline">
        {author.fields.name}, posted on date
      </Typography>
      <Typography variant="body1">
        {documentToReactComponents(summary)}
      </Typography>
    </div>
  );
};

export default BlogPreview;
