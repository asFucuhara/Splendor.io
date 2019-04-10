const express = require('express');

const app = express();

app.use('/', (req, res) => res.send('Well, Hello There!!'));

app.listen(3000,() => console.log('Listening....'));