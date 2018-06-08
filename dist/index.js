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

// TO COMPILE INTO DIST FOLDER
//./node_modules/.bin/babel  ./src --experimental --source-maps-inline -d ./dist 


var app = (0, _express2.default)();

// DB connection
//mongoose.connect('mongodb://localhost:27017/key_information')
_mongoose2.default.connect('mongodb://user:apiuser1R@ds119650.mlab.com:19650/key_information');

// MIDDLEWARE //
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

var port = process.env.PORT || 8080;
var router = _express2.default.Router();
// END MIDDLEWARE //

// Simple test log for each API request
router.use(function (req, res, next) {
    console.log('API is accessed.');
    next();
});

// GET all information from a key document
router.route('/keys/:key_abbr').get(function (req, res) {

    _key2.default.findOne({ 'abbr': req.params.key_abbr }, function (err, key) {
        if (err) res.send(err);
        res.json(key);
    });
});

// GET all chords from a key document
router.route('/keys/:key_abbr/chords').get(function (req, res) {

    _key2.default.findOne({ 'abbr': req.params.key_abbr }, function (err, key) {
        if (err) res.send(err);
        res.json(key.chords);
    });
});

// GET all notes from a key document    
router.route('/keys/:key_abbr/notes').get(function (req, res) {

    _key2.default.findOne({ 'abbr': req.params.key_abbr }, function (err, key) {
        if (err) res.send(err);
        res.json(key.notes);
    });
});
// GET all classical reference songs from a key document
router.route('/keys/:key_abbr/songs/classical').get(function (req, res) {

    _key2.default.findOne({ 'abbr': req.params.key_abbr }, function (err, key) {
        if (err) res.send(err);
        res.json(key.classical_songs);
    });
});
// GET all popular reference songs from a key document
router.route('/keys/:key_abbr/songs/popular').get(function (req, res) {

    _key2.default.findOne({ 'abbr': req.params.key_abbr }, function (err, key) {
        if (err) res.send(err);
        res.json(key.popular_songs);
    });
});

// Server instantiation
app.use('/api', router);
app.listen(port);
console.log('Port Number is ' + port);