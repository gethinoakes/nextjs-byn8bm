// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';
//const cheerio = require("cheerio");

// import { NextApiRequest, NextApiResponse } from 'next';

export default async (res) => {
  const url = 'https://en.wikipedia.org/wiki/Your_Article_Title_Here';
  try {
    const response = await axios.get(url);
     res.status(200).json(response.data);
    //const $ = cheerio.load(response.data);
    //const articleTitle = $('h1#firstHeading').text();
    //const articleContent = $('div#content').html();
    //res.status(200).json({ title: articleTitle, content: articleContent });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
