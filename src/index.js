import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Key from './key.js';

//./node_modules/.bin/babel  ./src --experimental --source-maps-inline -d ./dist 
// TO COMPILE INTO DIST FOLDER

const app = express();


//mongoose.connect('mongodb://localhost:27017/key_information')
mongoose.connect('mongodb://admin:1q2w3e4R@ds119650.mlab.com:19650/key_information')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

router.use(function(req, res, next){
    console.log('API is accessed.');
    next();
});

router.get('/', (req, res) => {
    res.json({ message: 'Hello'});
});

router.route('/keys/:key_abbr')

    .get(function (req, res) {

        Key.findOne({ 'abbr': req.params.key_abbr }, function(err, key) {
            if (err)
                res.send(err);
            res.json(key);
        });

    });

router.route('/keys/:key_abbr/chords')

    .get(function (req, res) {

        Key.findOne({ 'abbr': req.params.key_abbr }, function(err, key) {
            if (err)
                res.send(err);
            res.json(key.chords);
        });

    });

router.route('/keys/:key_abbr/notes')

    .get(function (req, res) {

        Key.findOne({ 'abbr': req.params.key_abbr }, function(err, key) {
            if (err)
                res.send(err);
            res.json(key.notes);
        });

    });

router.route('/keys/:key_abbr/songs/classical')

    .get(function (req, res) {

        Key.findOne({ 'abbr': req.params.key_abbr }, function(err, key) {
            if (err)
                res.send(err);
            res.json(key.classical_songs);
        });

    });

router.route('/keys/:key_abbr/songs/popular')

    .get(function (req, res) {

        Key.findOne({ 'abbr': req.params.key_abbr }, function(err, key) {
            if (err)
                res.send(err);
            res.json(key.popular_songs);
        });

    });

app.use('/api', router)

app.listen(port);
console.log('Port Number is ' + port);


