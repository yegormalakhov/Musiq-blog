import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Bloglist from "./Components/Bloglist";
import SideNav from "./Components/SideNav";
import client from "./contentful/client";
import Blog from "./Components/Blog";
import Author from "./Components/Author";

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
      .getEntries({ content_type: "article", select: "fields" })
      .then((entries) => setAllBlogs(entries.items));

    // client.getEntry("1BBz5wj12LOf1chSqLF9Ut").then(entry => console.log(entry))
  }, []);
  console.log(allBlogs);
  if (!allBlogs) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideNav />
        <Routes>
          <Route path="/" element={<Bloglist data={allBlogs} />} />
          <Route path=":blogId" element={<Blog data={allBlogs} />} />
          {/* <Route path=":author" element={<Author data={allBlogs} />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
