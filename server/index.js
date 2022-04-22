const express = require('express');
const app = express();

const controller = require('./src/controller');
for (const mapping in controller) {
    controller[mapping](app);
}

app.listen(5000, () => {
    console.log('express server started with port 5000');
});
