const axios = require('axios');
const cors = require('cors');

const express = require('express');

const app = express();

app.use(cors());

app.get('/proxy/:type', async (req, res) => {
  try {
    const type = req.params.type;
    
    const response = await axios.get(`https://api.example.com/data/${type}`, {
        headers: {
            'X-Api-Key': process.env.API_KEY
        }
    });

    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while making the API request.');
  }
});

app.listen(3000, () => console.log('listening on port 3000'));