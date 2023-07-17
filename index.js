const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));


app.get('/', (req, res) => {
  res.send('Hello!')
})

app.post('/form', function(req, res){
  res.setHeader('Content-Type', 'application/json');

  setTimeout(function(){
    res.send('Data submitted!');
  }, 500)

  console.log('Posted form data', req.body);
});

app.listen(3000, function () {
  console.log('Server is running. Point your browser to: http://localhost:3000');
});
