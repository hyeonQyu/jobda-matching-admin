const exchangeApi = require('./api/exchangeApi');
const quotationApi = require('./api/quotationApi');

/**
 * Controller
 */
module.exports = {
    getTest: (app) => {
        app.get('/test-api', async (req, res) => {
            console.log(req);
            res.send(req);
        });
    },
};
