import mongoose from 'mongoose';

var Schema = mongoose.Schema;

//SCHEMA imported from index.js

var KeySchema = new Schema({
    name: String,
    abbr: String,
    notes: [String],
    chords: [String],
    classical_songs: String,
    popular_songs: String,
    relative_minor: String
},
{
    collection:'keys'
});

// EXPORT SCHEMA
module.exports = mongoose.model('Key', KeySchema)