import BlogPreview from "./BlogPreview";
import { Link } from "react-router-dom";
import { Paper, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const Bloglist = (data) => {
  const blogList = data.data;
  // console.log(blogList);
  return (
    <div className="blogList">
      {blogList.map((blog) => {
        return (
          <div key={blog.sys.id} className="previewCard">
            <Paper
              style={{
                padding: "30px",
                margin: "20px",
                backgroundColor: "#eceef1",
              }}
            >
              <BlogPreview {...blog.fields} />
              <Button
                component={Link}
                to={blog.sys.id}
                variant="outlined"
                color="primary"
              >
                <Typography>Read more</Typography>
              </Button>
            </Paper>
          </div>
        );
      })}
    </div>
  );
};

export default Bloglist;
