const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require('./routes/articles.js')
const app = express();
app.set('view engine', 'ejs')
app.use('/public/assets', express.static('public/assets'));

mongoose.connect('mongodb://127.0.0.1/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    },
    {
        title: 'Test Article2',
        createdAt: new Date(),
        description: 'Test Description2'
    },
    {
        title: 'Test Article3',
        createdAt: new Date(),
        description: 'Test Description3'
    },
    {
        title: 'Test Article4',
        createdAt: new Date(),
        description: 'Test Description4'
    }
]
    res.render('articles/index', {articles: articles});
})

app.use('/articles', articleRouter);


app.listen(5000);