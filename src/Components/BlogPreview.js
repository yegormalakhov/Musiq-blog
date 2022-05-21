import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";

const BlogPreview = ({ title, author, description, summary }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Link to={author.sys.id}>
        <h6>{author.fields.name}</h6>
      </Link>
      <h6>, posted on date</h6>
      <div>{documentToReactComponents(summary)}</div>
    </div>
  );
};

export default BlogPreview;
