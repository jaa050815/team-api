const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/craigen', (req,res) => {res.send("Hello Craigen")});

app.get('/alex', (req,res) => {res.send("Hello Alex")});

app.get('/karen'), (req,res) => {res.send("Hello Karen")};

app.get('/josiah', (req,res) => {res.send("Hello Josiah")});

app.listen(port, ()=>console.log("Listening"));