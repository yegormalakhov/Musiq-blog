import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BlogPreview = ({ title, author, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h6>{author.fields.name}, posted on date</h6>
      <div>{documentToReactComponents(description)}</div>
    </div>
  );
};

export default BlogPreview;
