const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app
  .use(bodyParser.json())
  .post('/', onPost)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));


function onPost(req, res) {
  console.log('Billable hours were ' + req.body['Billable']);
  res.send('success');
}