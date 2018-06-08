import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Key from './key.js';

// TO COMPILE INTO DIST FOLDER
//./node_modules/.bin/babel  ./src --experimental --source-maps-inline -d ./dist 


const app = express();

// DB connection
//mongoose.connect('mongodb://localhost:27017/key_information')
mongoose.connect('mongodb://user:apiuser1R@ds119650.mlab.com:19650/key_information')

// MIDDLEWARE //
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
const router = express.Router();
// END MIDDLEWARE //

// Simple test log for each API request
router.use(function(req, res, next){
    console.log('API is accessed.');
    next();
});

// GET all information from a key document
router.route('/keys/:key_abbr')

    .get(function (req, res) {

        Key.findOne({ 'abbr': req.params.key_abbr }, function(err, key) {
            if (err)
                res.send(err);
            res.json(key);
        });

    });

// GET all chords from a key document
router.route('/keys/:key_abbr/chords')

    .get(function (req, res) {

        Key.findOne({ 'abbr': req.params.key_abbr }, function(err, key) {
            if (err)
                res.send(err);
            res.json(key.chords);
        });

    });

// GET all notes from a key document    
router.route('/keys/:key_abbr/notes')

    .get(function (req, res) {

        Key.findOne({ 'abbr': req.params.key_abbr }, function(err, key) {
            if (err)
                res.send(err);
            res.json(key.notes);
        });

    });
// GET all classical reference songs from a key document
router.route('/keys/:key_abbr/songs/classical')

    .get(function (req, res) {

        Key.findOne({ 'abbr': req.params.key_abbr }, function(err, key) {
            if (err)
                res.send(err);
            res.json(key.classical_songs);
        });

    });
// GET all popular reference songs from a key document
router.route('/keys/:key_abbr/songs/popular')

    .get(function (req, res) {

        Key.findOne({ 'abbr': req.params.key_abbr }, function(err, key) {
            if (err)
                res.send(err);
            res.json(key.popular_songs);
        });

    });


// Server instantiation
app.use('/api', router)
app.listen(port);
console.log('Port Number is ' + port);


