const mongoose = require ('mongoose');

async function startDB(){
     await mongoose.connect('mongodb+srv://projeto1:12181929dass@cluster0.rzsvuyw.mongodb.net/test');
}

module.exports = startDB;