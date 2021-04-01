//Impor mongoose to work better with mongo, also bcrypt for password encryptation
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Defining a Schema
const Schema = mongoose.Schema

//Making a UserSchema which is a Mongoose Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

//Function called before saving, password is encrypted
UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

//Password check, sent password is compared with DB password, if they are similar it's alright
UserSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare
}

//Exporting Schema/Model
module.exports = mongoose.model('User', UserSchema);