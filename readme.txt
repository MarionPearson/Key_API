
---------- SUMMARY ----------

This node project is a simple REST API used by the Key_Information project.
While unneccessary, it's always nice to have an easy to use and extend
decoupling of front and back ends.

This API is usable ONLY for GET requests. 
It fetches information on musical keys.

---------- TECH STACK -----------

MongoDB database hosted by mlab.com
Mongoose for data modeling
Express JS for routing
Babel for transpiling ES6 from the ./src directory to the ./dist directory
Node and npm for package and dependency management

---------- USAGE ----------

GET request key formatting example:

    Key to request: 'C Sharp Major'
    Key abbreviation: 'C#Maj'

    Key to request: 'C Flat Major'
    Key abbreviation: 'CbMaj'

ENDPOINTS:

    End point: /api/keys/<key_abbreviation>
    Usage: Retrieve all information for a given key.
    Example: /api/keys/c#maj

    End point: /api/keys/<key_abbreviation>/chords
    Usage: Retrieve all chords in a given key.
    Example: /api/keys/c#maj/chords

    End point: /api/keys/<key_abbreviation>/notes
    Usage: Retrieve all notes in a given key.
    Example: /api/keys/c#maj/notes

    End point: /api/keys/<key_abbreviation>/classical
    Usage: Retrieve classical songs in a given key.
    Example: /api/keys/c#maj/songs/classical

    End point: /api/keys/<key_abbreviation>/popular
    Usage: Retrieve popular songs in a given key.
    Example: /api/keys/c#maj/songs/popular

DATA SCHEMA:

    name: String,
    abbr: String,
    notes: [String],
    chords: [String],
    classical_songs: String,
    popular_songs: String,
    relative_minor: String