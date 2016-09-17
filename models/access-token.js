const request = require('request');
const requestPromise = require('request-promise');
const url = require('url');

var clientId = 'd852506dbe7e48fb8c769a7b7065176f';
var redirectUri = 'https://ig-crawler.herokuapp.com/callback';
var code = '';

function requestCode(req, res) {
    requestPromise('https://instagram.com/oauth/authorize/?client_id=' + clientId + '&redirect_uri=' + redirectUri + '&response_type=code').then((body) => {
        res.send(body);
    }).catch((error) => {
        res.send(error);
    })
}

function getCode(req, res) {
    res.send(req.query.code);
}

exports.requestCode = requestCode;
exports.getCode = getCode;