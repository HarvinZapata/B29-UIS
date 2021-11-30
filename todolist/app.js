const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

app.use( express.static('deploy') );

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})