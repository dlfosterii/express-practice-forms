const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.set('views', 'views')

//GET index
app.get('/', (req,res)=>{
    res.render('index', {
        title: 'David Foster',
    });
});


//GET contact

app.get('/contact', (req, res)=>{
    res.render('contact', {
        title: 'Contact',
        submitted: false,
    })
});

//PUT for email submission
app.post('/contact', (req, res)=>{
       res.render('contact', {
        title: 'Contact',
        submitted: true,
    })


});









app.listen(PORT, () => {
  console.log(`Listening. Open http://localhost:${PORT} to view.`);
});