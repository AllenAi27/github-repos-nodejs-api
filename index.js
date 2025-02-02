const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', async (req, res) => {
  try {
    // const result = await axios.get(
    //   `https://api.github.com/users/${username}/repos`
    // );
    // const repos = result.data
    //   .map((repo) => ({
    //     name: repo.name,
    //     url: repo.html_url,
    //     description: repo.description,
    //     stars: repo.stargazers_count
    //   }))
    //   .sort((a, b) => b.stars - a.stars);


    res.sendStatus(200);
  } catch (error) {
    console.log("error message: " + error)
    res.status(400).send('Error while getting list of repositories');
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
