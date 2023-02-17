// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require('axios');



export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
console.log(req);
// res.status(200).json({ name: 'Hello, world!' });
const WIKIPEDIA_ARTICLE_URL = 'https://en.wikipedia.org/wiki/Your_Article_Title';
try {
    // Fetch the Wikipedia article HTML using Axios
    const response = await axios.get(WIKIPEDIA_ARTICLE_URL);

    // Do something with the response (e.g. parse the HTML for relevant data)
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
  }
};
