const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/article.js");
const articleRouter = require('./routes/articles.js')
const app = express();
app.set('view engine', 'ejs')
app.use('/public/assets', express.static('public/assets'));

mongoose.connect('mongodb://127.0.0.1/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.use(express.urlencoded({extended: false}))

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'
    })
    res.render("articles/index", {articles: articles}) 
})

app.use('/articles', articleRouter);


app.listen(5000);