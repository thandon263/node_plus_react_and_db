const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});


const PORT = process.env.PORT || 5000;
app.listen(5000,
  console.log("Server is running on Port: 5000.")
);

// localhost:5000
