const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = Schema({
    username: { type: String, required: true },
    passwordHash: { type: String, required: true},
    role: { 
        type: [{
            type: String,
            enum: ['admin', 'member' ]
        }],
        default: ['member']
     },
     createAt: {
         type: Date,
         default: Date.now
     }

})

module.exports = mongoose.model('User', schema);
