// const contentful = require("contentful"); // Nodejs ==> commonjs syntax

import { createClient } from "contentful";
const { REACT_APP_CONTENTFUL_SPACE_ID, REACT_APP_CONTENTFUL_ACCESSTOKEN_ID } =
  process.env;

const client = createClient({
  space: REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: REACT_APP_CONTENTFUL_ACCESSTOKEN_ID,
});

// const getAuthors = async () => {
//   try {
//     const entries = await client.getEntries({
//       content_type: "author",
//       select: "field",
//     });
//     console.log(entries);
//   } catch (error) {
//     console.log(`Error fetching authors: ${error} `);
//   }
// };

export default client;
