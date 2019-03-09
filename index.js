
const express = require('express')
const app = express();
const port = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.get('/getRate', calculateRate)

// start the server listening
app.listen(port, function() {
  console.log('Node app is running on port', port);
});

function calculateRate(req, res){
  const weight = Number(req.query.weight);
  const type = req.query.mail;

  computeRate(weight, type);
}


function computeRate(weight, type){
  if (type == "stamped"){
    console.log ("stamped");
    if (weight < 1)
    result = 0.55;
    else if (weight < 2)
    result = 0.70;
    else if (weight < 3)
    result = 0.85;
    else if (weight < 3.5)
    result = 1.00;
    else
    result = 99;
  }
  else if (type == "metered"){
    console.log ("metered");
    if (weight < 1)
    result = 0.50;
    else if (weight < 2)
    result = 0.65;
    else if (weight < 3)
    result = 0.80;
    else if (weight < 3.5)
    result = 0.95;
    else
    result = 99;
  }
  else if (type == "flats"){
    console.log ("flats");
    if (weight < 1)
    result = 1.00;
    else if (weight < 2)
    result = 1.15;
    else if (weight < 3)
    result = 1.30;
    else if (weight < 4)
    result = 1.45;
    else if (weight < 5)
    result = 1.60;
    else if (weight < 6)
    result = 1.75;
    else if (weight < 7)
    result = 1.90;
    else if (weight < 8)
    result = 2.05;
    else if (weight < 9)
    result = 2.20;
    else if (weight < 10)
    result = 2.35;
    else if (weight < 11)
    result = 2.50;
    else if (weight < 12)
    result = 2.65;
    else if (weight < 13)
    result = 2.80;
    else
    result = 99;
  }
  else if (type == "package"){
    console.log ("package");
    if (weight < 4)
    result = 3.66;
    else if (weight < 8)
    result = 4.39;
    else if (weight < 12)
    result = 5.19;
    else if (weight < 13)
    result = 5.71;
    else
    result = 99;
  }
  else{
    console.log ("something went wrong.");

  }

  const params = {weight: weight, type: type, result: result};

  Response.render('pages/getRate', params)

}


/* express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))  */
