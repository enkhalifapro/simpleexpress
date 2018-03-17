const express = require('express')
const index = require('./controller')
var exphbs = require('express-handlebars');

const app = express()

// handlebars config
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// static files config
app.use('/static', express.static('public'))

app.get('/', (req, res) => res.send('Hello Worldxx!'))

app.get('/html', index.indexHtml)

app.get('/html/layout', index.indexLayout)

app.get('/search/:name', index.beforeIndex, index.index)

app.listen(5000, () => console.log("server at 5000"))