
const express = require('express')
const app = express();
const port = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.get('/getRate', (req, res) => res.render('pages/getRate'))

// start the server listening
app.listen(port, function() {
  console.log('Node app is running on port', port);
});

/* express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))  */
