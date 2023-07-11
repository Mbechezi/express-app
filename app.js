const express = require('express')
const app = express()
var path = require('path')


//dossier qui va contenir les vues 
app.set('views', './views')

// le moteur des templates
app.set('view engine', 'ejs')


//l'app va écouter en get
app.get('/', (req, res) => {
    res.render('Home')
})

app.get('/contact', (req, res) => {
    res.render('Contact')
})

app.get('/services', (req, res) => {
    res.render('Services')
})

app.use(express.static(path.join(__dirname , "/views")));

app.listen(3000)