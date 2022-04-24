const fs = require('fs');

module.exports = {
    getJsonData(fileName) {
        console.log('-----------------------------------');
        console.log('json data 읽기:', `${fileName}.json`);
        const jsonFile = fs.readFileSync(`./data/${fileName}.json`, 'utf-8');
        const jsonData = JSON.parse(jsonFile);
        console.log('읽기 완료', jsonData);
        console.log('-----------------------------------');
        return jsonData;
    },

    saveJsonData(data, fileName) {
        console.log('-----------------------------------');
        console.log('json data 저장:', data);
        fs.writeFileSync(`./data/${fileName}.json`, JSON.stringify(data));
        console.log(`${fileName}.json 저장 완료`);
        console.log('-----------------------------------');
    },
};
