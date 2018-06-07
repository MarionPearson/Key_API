import mongoose from 'mongoose';

var Schema = mongoose.Schema;

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
    collection:'key_c_major'
});

module.exports = mongoose.model('Key', KeySchema)