import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Key from './key.js';

//./node_modules/.bin/babel  ./src --experimental --source-maps-inline -d ./dist 
// TO COMPILE INTO DIST FOLDER

const app = express();


mongoose.connect('mongodb://localhost:27017/key_information')


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

router.route('/keys')

    .get(function (req, res) {

        Key.findOne({ 'name': 'F Major' }, function(err, keys) {
            if (err)
                res.send(err);
            res.json(keys.chords);
        });

    });

app.use('/api', router)

app.listen(port);
console.log('Port Number is ' + port);


