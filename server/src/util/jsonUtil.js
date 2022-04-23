const fs = require('fs');

module.exports = {
    getJsonData(fileName) {
        console.log('json data 읽기: ', `${fileName}.json`);
        const jsonFile = fs.readFileSync(`./data/${fileName}.json`, 'utf-8');
        const jsonData = JSON.parse(jsonFile);
        console.log('읽기 완료', jsonData);
        return jsonData;
    },
};
