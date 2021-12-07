const express = require('express');
const app = express();

app.use(express.urlencoded());

app.use('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.use("/add", (req, res) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type=submit>Your name</button></form>')
});

app.use("/", (req, res, next) => {
  res.send('<h1>Hellooo Worlddd!!!</h1>')
  next();
});

app.set('port', 3000)

app.listen(app.set('port'), ()=> {
  console.log('Listening in port 3000');
})


