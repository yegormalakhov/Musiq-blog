// const contentful = require("contentful"); // Nodejs ==> commonjs syntax

import { createClient } from "contentful";

const client = createClient({
  space: "rdotlj70q82v",
  accessToken: "-gebTgQFHZVfe_gIe1Cl1NCWGPpYQ7e9oNJJ6QvxWnM",
});

export default client;
