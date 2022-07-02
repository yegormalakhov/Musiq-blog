import React, { useEffect, useState } from "react";
import serverURL from "../serverURL.js";

const Testwindow = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${serverURL}/routes/blogs/time`)
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((data) => setData(data));
  }, []);
  if (!data) {
    return <p>Loading</p>;
  } else {
    console.log(data);
    return <h1>{data}</h1>;
  }
};

export default Testwindow;
