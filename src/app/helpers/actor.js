let _ = require('lodash');

exports.actors = function (doc) {
    return _.get(doc, 'actors');
};