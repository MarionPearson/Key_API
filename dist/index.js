'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _key = require('./key.js');

var _key2 = _interopRequireDefault(_key);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//./node_modules/.bin/babel  ./src --experimental --source-maps-inline -d ./dist 
// TO COMPILE INTO DIST FOLDER

var app = (0, _express2.default)();

_mongoose2.default.connect('mongodb://localhost:27017/key_information');

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

var port = process.env.PORT || 8080;

var router = _express2.default.Router();

router.use(function (req, res, next) {
    console.log('API is accessed.');
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'Hello' });
});

router.route('/keys').get(function (req, res) {

    _key2.default.findOne({ 'name': 'C Major' }, function (err, keys) {
        if (err) res.send(err);
        res.json(keys);
    });
});

app.use('/api', router);

app.listen(port);
console.log('Port Number is ' + port);