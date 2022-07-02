import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Bloglist from "./Components/Bloglist";
import client from "./contentful/client";
import Blog from "./Components/Blog";
import Author from "./Components/Author";
import Topnav from "./Components/Topnav";
import Genre from "./Components/Genre";
import Testwindow from "./Components/Testwindow";
import { Container, Box, Grid, Paper } from "@mui/material";

function App() {
  const [allBlogs, setAllBlogs] = useState();

  useEffect(() => {
    // const fetchUrl =
    //   "https://cdn.contentful.com/spaces/rdotlj70q82v/entries?access_token=-gebTgQFHZVfe_gIe1Cl1NCWGPpYQ7e9oNJJ6QvxWnM";
    // fetch(fetchUrl)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    // client.getEntries (of a specific content type) ==> At the top level (where you display cards)
    // client.getEntry (with a specific id) ==> inside the article component itself (you would get the id from the url params)

    client
      .getEntries({
        content_type: "article",
        select: "fields",
      })
      .then((entries) => setAllBlogs(entries.items));

    // client.getEntry("1BBz5wj12LOf1chSqLF9Ut").then(entry => console.log(entry))
  }, []);

  // console.log(allBlogs);

  if (!allBlogs) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <Container
        className="App"
        style={{ width: "100%" }}
        justify="center"
        elevate={2}
      >
        <Topnav data={allBlogs} />
        <Paper elevation={2}>
          <Grid container>
            <Grid item xs={12}>
              <Box className="headerContainer">
                <Header />
              </Box>
            </Grid>
          </Grid>
          <div className="main">
            <Routes>
              <Route path="/" element={<Bloglist />} />
              <Route path=":blogId" element={<Blog />} />
              <Route path="/author/:authorId" element={<Author />} />
              <Route path="/style/:genreId" element={<Genre />} />
              <Route path="/routes/blogs/time" element={<Testwindow />} />
            </Routes>
          </div>
          <Footer />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
