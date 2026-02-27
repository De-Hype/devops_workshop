const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    status:"success",
    message:"Thank you for staying till now"})
});

app.listen(port, "0.0.0.0",() => {
  console.log(`Server running on http://localhost:${port}`);
});


