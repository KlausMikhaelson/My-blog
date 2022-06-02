const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require('./routes/articles.js')
const app = express();
app.set('view engine', 'ejs')
app.use('/public/assets', express.static('public/assets'));
app.use('/articles', articleRouter);



app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        creatAt: Date.now(),
        description: 'Test Description'
    }]
    res.render('index', {articles: articles});
})

app.listen(5000);