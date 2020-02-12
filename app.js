const express = require('express');
const http = require('http');
const path = require('path');
const port = process.env.PORT||5000;

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .listen(port, () => console.log(`Listening on ${ port }`))
