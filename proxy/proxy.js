
const cors = require('cors');
require('dotenv').config();
const express = require('express');

const app = express();

app.use(cors());

app.get('/proxy/:type', async (req, res) => {
  try {
    const type = req.params.type;
    const response = await fetch(`https://api.api-ninjas.com/v1/randomword?type=${type}`, {
        headers: {
            'X-Api-Key': process.env.API_KEY
        }
    });
    const word = await response.json();
    res.send(word);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while making the API request.');
  }
});

app.listen(3000, () => console.log('listening on port 3000'));