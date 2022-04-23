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
