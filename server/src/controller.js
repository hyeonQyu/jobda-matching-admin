const { getJsonData } = require('./util/jsonUtil');

const doCommonResponse = (app, path, callback) => {
    app.get(`/api/${path}`, async (req, res) => {
        console.log(`request: ${path}`);
        try {
            callback(req, res);
            console.log('response 성공');
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
