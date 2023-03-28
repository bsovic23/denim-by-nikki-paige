const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost/denimbynikkipaige', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;