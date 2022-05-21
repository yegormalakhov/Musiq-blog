import BlogPreview from "./BlogPreview";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

const Bloglist = (data) => {
  const blogList = data.data;
  return (
    <div className="blogList">
      {blogList.map((blog) => {
        return (
          // <div key={blog.sys.id}>
          //   <Paper style={{ padding: "30px", margin: "20px" }}>
          //     <BlogPreview {...blog.fields} />
          //     <Link to={blog.sys.id}>Show blog</Link>
          //   </Paper>
          // </div>
          <div key={blog.sys.id} style={{ width: "100%" }}>
            <Card style={{ padding: "30px", margin: "10px" }}>
              <CardContent>
                <BlogPreview {...blog.fields} />
              </CardContent>
              <CardActions>
                {/* <Button size="small">Learn More</Button> */}

                <Link to={blog.sys.id}>
                  <Paper style={{ padding: "7px" }}>
                    <Typography>Show blog</Typography>
                  </Paper>
                </Link>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Bloglist;
