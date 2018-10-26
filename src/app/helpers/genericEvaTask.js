'use strict';

const yaml = require('js-yaml');
const fs = require('fs');

exports.genericEvaTask = function (fileLocation) {
    if (fs.existsSync(fileLocation)) {
        return yaml.safeLoad(fs.readFileSync(fileLocation, 'utf8'));
    }

    return null;
};