const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());

const controller = require('./src/controller');
for (const path in controller) {
    controller[path](app, path);
}

app.listen(5000, () => {
    console.log('express server started with port 5000');
});
