import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import GoBack from "./GoBack";

const Blog = (data) => {
  const { blogId } = useParams();
  const blogList = data.data;
  const targetedBlog = blogList.find((blog) => {
    return blog.sys.id === blogId;
  });

  console.log(targetedBlog.fields);
  return (
    <div>
      <h2>{targetedBlog.fields.title}</h2>
      <h6>{targetedBlog.fields.author.fields.name}, posted on date</h6>
      <div>{documentToReactComponents(targetedBlog.fields.description)}</div>
      <GoBack />
    </div>
  );
};

export default Blog;
