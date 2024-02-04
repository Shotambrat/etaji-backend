const express = require('express');
const cors = require('cors');
const app = express();
const port = 4444;

const router = require('./routes/user')

app.use(cors());

app.use(express.json());
app.use(router);




app.listen(port, () => {
    console.log(`THIS IS EXAMPLE SERVER!!!!!!!)))) in port number ${port}`);
});

