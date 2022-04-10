const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.render('index')
})

app.listen(port);
console.log(`server is listening on port ${port}`);