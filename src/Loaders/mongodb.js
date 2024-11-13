const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect('mongodb+srv://guipascoal:agAaF6SyqcVIxPM6@trainee.ykuv0.mongodb.net/?retryWrites=true&w=majority&appName=trainee')
}

module.exports = startDB;