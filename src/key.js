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
    collection:'keys'
});

module.exports = mongoose.model('Key', KeySchema)