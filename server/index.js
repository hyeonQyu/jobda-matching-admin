const express = require('express');
const app = express();

const controller = require('./src/controller');
for (const path in controller) {
    controller[path](app, path);
}

require('./src/util/jsonUtil').getJsonData('jobGroupList');

app.listen(5000, () => {
    console.log('express server started with port 5000');
});
