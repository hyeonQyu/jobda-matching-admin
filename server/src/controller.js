const { getJsonData, saveJsonData } = require('./util/jsonUtil');

const doCommonResponse = (app, path, method, callback) => {
    app[method](`/api/${path}`, async (req, res) => {
        console.log(`\nrequest: ${path}`);
        req.body && console.log(('요청 body:', req.body));

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
        doCommonResponse(app, path, 'get', (req, res) => {
            const data = {
                companyList: null,
                jobGroupList: null,
                successStoryList: null,
                youtubeVideoSrcList: null,
            };

            for (const key in data) {
                data[key] = getJsonData(key);
            }

            res.send(data);
        });
    },

    save: (app, path) => {
        doCommonResponse(app, path, 'post', (req, res) => {
            const { body } = req;
            try {
                for (const key in body) {
                    saveJsonData(body[key], key);
                }

                res.send(true);
            } catch (e) {
                console.error(e);
                res.send(false);
            }
        });
    },
};
