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
    load: (app, path) => {
        doCommonResponse(app, path, (req, res) => {
            const data = {
                companyList: null,
                jobGroupList: null,
                successStoryList: null,
            };

            for (const key in data) {
                data[key] = getJsonData(key);
            }

            res.send(data);
        });
    },

    save: (app, path) => {
        doCommonResponse(app, path, (req, res) => {
            try {
                for (const key in req) {
                    saveJsonData(req[key], key);
                }

                res.send(true);
            } catch (e) {
                console.error(e);
                res.send(false);
            }
        });
    },
};
