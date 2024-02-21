const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/craigen', (req,res) => {res.send("Hello Craigen")});

app.get('/alex', (req,res) => {res.send("Hello Alex")});

app.listen(port, ()=>console.log("Listening"));