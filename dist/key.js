'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

//SCHEMA imported from index.js

var KeySchema = new Schema({
    name: String,
    abbr: String,
    notes: [String],
    chords: [String],
    classical_songs: String,
    popular_songs: String,
    relative_minor: String
}, {
    collection: 'keys'
});

// EXPORT SCHEMA
module.exports = _mongoose2.default.model('Key', KeySchema);