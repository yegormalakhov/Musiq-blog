import BlogPreview from "./BlogPreview";
import { Link } from "react-router-dom";

const Bloglist = (data) => {
  const blogList = data.data;
  return (
    <div className="blogList">
      {blogList.map((blog) => {
        return (
          <div key={blog.sys.id}>
            <BlogPreview {...blog.fields} />
            <Link to={blog.sys.id}>Show blog</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Bloglist;  
