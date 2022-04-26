const { getJsonData, saveJsonData } = require('./util/jsonUtil');
const axios = require('axios');

const doCommonResponse = (app, path, method, callback) => {
    app[method](`/api/${path}`, async (req, res) => {
        console.log(`\nrequest: ${path}`);
        req.body && console.log(('요청 body:', req.body));

        try {
            await callback(req, res);
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

    getRecruitNoticeInfoByUrl: (app, path) => {
        doCommonResponse(app, path, 'post', async (req, res) => {
            const { url } = req.body;

            const { data } = await axios.get(
                `https://api.${url.substring('https://www.'.length)}`.replace('position', 'positions').replace('/jd', ''),
            );
            const { basicInfo, additionalInfo, companyInfo } = data;
            const { positionName, createdDateTime, recruitmentType } = basicInfo;
            const { jobGroupName, jobTitleNames, locationName } = additionalInfo;
            const { companyName } = companyInfo;

            const resData = {
                title: positionName,
                job: `${jobGroupName}・${jobTitleNames?.join(', ')}`,
                companyName,
                recruitSectorName: (() => {
                    switch (recruitmentType) {
                        case 'CAREER':
                            return '경력';
                        case 'NEW':
                            return '신입';
                        case 'ANY':
                            return '무관';
                        default:
                            return '';
                    }
                })(),
                location: locationName,
                registrationDatetime: (() => {
                    const arr = createdDateTime.substring(0, 'yyyy-mm-dd'.length).split('-');
                    return {
                        year: Number(arr[0]),
                        month: Number(arr[1]),
                        date: Number(arr[2]),
                    };
                })(),
                recruitNoticeUrl: url,
                isNew: true,
            };

            console.log('data', resData);
            res.send(resData);
        });
    },
};
