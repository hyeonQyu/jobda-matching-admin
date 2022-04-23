const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const controller = require('./src/controller');
for (const path in controller) {
    controller[path](app, path);
}

app.listen(5000, () => {
    console.log('express server started with port 5000');
});
