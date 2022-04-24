const { getJsonData, saveJsonData } = require('./util/jsonUtil');

const doCommonResponse = (app, path, callback) => {
    app.get(`/api/${path}`, async (req, res) => {
        console.log(`\nrequest: ${path}`);
        try {
            callback(req, res);
            console.log('response 성공\n');
        } catch (e) {
            console.error(e);
        }
    });
};

/**
 * Controller
 */
module.exports = {
    getCompanyList: (app, path) => {
        doCommonResponse(app, path, (req, res) => {
            res.send(getJsonData('companyList'));
        });
    },

    getJobGroupList: (app, path) => {
        doCommonResponse(app, path, (req, res) => {
            res.send(getJsonData('jobGroupList'));
        });
    },
};
