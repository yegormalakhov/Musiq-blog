import BlogPreview from "./BlogPreview";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Bloglist = (data) => {
  const blogList = data.data;
  // console.log(blogList);

  console.log({ blogList });
  return (
    <div className="blogList">
      {blogList.map((blog) => {
        return (
          <div>
            <BlogPreview key={blog.sys.id} {...blog.fields} />
            <Link to={blog.sys.id}>Show blog</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Bloglist;
