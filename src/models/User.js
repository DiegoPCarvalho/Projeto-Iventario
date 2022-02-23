const { Timestamp } = require('bson');
const { Schema, model } = require('mongoose');
const  bcrypt = require('bcrypt');


const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
},
    {
    Timestamp: true
});


UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}


module.exports = model('User', UserSchema);