const express = require('express');
const app = express();

app.use(express.urlencoded());

app.post('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.get("/add", (req, res) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type=submit>Your name</button></form>')
});

app.get("/", (req, res, next) => {
  res.send('<h1>Hellooo Worlddd!!!</h1>')
  next();
});

app.get("/edit", (req, res) => {
  res.status(500).send('<h1>Something broke!</h1>')
});

app.set('port', 3000)

app.listen(app.set('port'), ()=> {
  console.log('Listening in port 3000');
})