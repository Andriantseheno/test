const express=require('express');

const app=express();

app.use(express.static(__dirname + '/dist'));

const port=process.env.PORT || 8000;

app.listen(port);

