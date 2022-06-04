import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Paper, Button } from "@mui/material";

const BlogPreview = ({ title, author, description, summary }) => {

  console.log(author.sys.id)
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="overline">
      <Button
                component={Link}
                to={`/author/${author.sys.id}`}
                variant="text"
                color="secondary"
              >
                {author.fields.name}
              </Button>
        , posted on date
      </Typography>
      <Typography variant="body1">
        {documentToReactComponents(summary)}
      </Typography>
    </div>
  );
};

export default BlogPreview;
