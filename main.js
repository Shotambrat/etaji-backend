const express = require('express');
const app = express();
const port = process.env.PORT || 4444;

const router = require('./routes/user')

app.use(express.json());
app.use(router);



app.listen(port, () => {
    console.log(`THIS IS EXAMPLE SERVER!!!!!!!)))) in port number ${port}`);
});

