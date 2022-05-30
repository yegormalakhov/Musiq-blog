import BlogPreview from "./BlogPreview";
import { Link } from "react-router-dom";
import { Paper, Button } from "@mui/material";

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
          //first option
          <div key={blog.sys.id} className="previewCard">
            <Paper style={{ padding: "30px", margin: "20px", backgroundColor: "#eceef1" }}>
              <BlogPreview {...blog.fields} />
              <Button
                component={Link}
                to={blog.sys.id}
                variant="outlined"
                color="primary"
              >
                Read more
              </Button>
            </Paper>
          </div>

          //Second option

          // <div key={blog.sys.id} style={{ width: "100%" }}>
          //   <Card style={{ padding: "30px", margin: "10px" }}>
          //     <CardContent>
          //       <BlogPreview {...blog.fields} />
          //     </CardContent>
          //     <CardActions>
          //       {/* <Button size="small">Learn More</Button> */}

          //       <Link to={blog.sys.id}>
          //         <Paper style={{ padding: "7px" }}>
          //           <Typography>Read more</Typography>
          //         </Paper>
          //       </Link>
          //     </CardActions>
          //   </Card>
          // </div>
        );
      })}
    </div>
  );
};

export default Bloglist;
