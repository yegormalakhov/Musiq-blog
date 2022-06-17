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
import { Container, Box, Grid, Paper, Pagination } from "@mui/material";
import ReactPaginate from "react-paginate";

function App() {
  const [allBlogs, setAllBlogs] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState();
  const [searchResult, setSearchResult] = useState();

  const blogsPerPage = 5;
  useEffect(() => {
    // const fetchUrl =
    //   "https://cdn.contentful.com/spaces/rdotlj70q82v/entries?access_token=-gebTgQFHZVfe_gIe1Cl1NCWGPpYQ7e9oNJJ6QvxWnM";
    // fetch(fetchUrl)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    // client.getEntries (of a specific content type) ==> At the top level (where you display cards)
    // client.getEntry (with a specific id) ==> inside the article component itself (you would get the id from the url params)
    const endOffset = itemOffset + blogsPerPage;

    client
      .getEntries({
        content_type: "article",
        select: "fields",
      })
      .then((entries) => {
        setAllBlogs(entries.items.slice(itemOffset, endOffset));
        setTotalPages(Math.ceil(entries.items.length / blogsPerPage));
      });

    // client.getEntry("1BBz5wj12LOf1chSqLF9Ut").then(entry => console.log(entry))
  }, [itemOffset, blogsPerPage]);

  const handleChange = (page) => {
    const newOffset = page.selected * blogsPerPage;
    setItemOffset(newOffset);
  };

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };

  function testResult() {
    // setSearchResult(
    allBlogs.filter((blog) => {
      const title = blog.fields.title.toLowerCase();
      const searchterm = query.toLowerCase();
      // console.log(title);
      // console.log(searchterm);
      return title.includes(searchterm);
    });
    // );
  }
  if (allBlogs && query) {
    testResult();
  }

  if (!allBlogs) {
    return <h1>Loading...</h1>;
  }

  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(searchTerm);
    console.log(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="container">
      <Container
        className="App"
        style={{ width: "100%" }}
        justify="center"
        elevate={2}
      >
        <Topnav
          data={allBlogs}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          onChange={onChange}
        />
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
              <Route path="/" element={<Bloglist data={allBlogs} />} />
              <Route path=":blogId" element={<Blog data={allBlogs} />} />
              <Route path="/author/:authorId" element={<Author />} />
              <Route path="/style/:genreId" element={<Genre />} />
            </Routes>
            <ReactPaginate
              className="pagination"
              nextLabel="Next >"
              previousLabel="< Previous"
              breakLabel="..."
              onPageChange={handleChange}
              pageCount={totalPages}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              nextClassName="page-item"
              previousClassName="page-item"
              nextLinkClassName="page-link"
              previousLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              pageRangeDisplayed={5}
              marginPagesDisplayed={5}
            />
          </div>

          <Footer />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
