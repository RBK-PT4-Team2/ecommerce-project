const express = require('express');
const app = express();
const port = 3000;
const cors= require("cors")

app.use(express.json())
app.use(cors())

// Define a GET endpoint
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});




// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});