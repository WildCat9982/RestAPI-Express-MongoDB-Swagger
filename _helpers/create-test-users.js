const bcrypt = require('bcrypt')
const db = require('./db')

createTestUser = async() => {
    if ( await db.User.countDocuments({}) === 0) {
        const user = new db.User({
            username: 'KelvinLee',
            passwordHash: bcrypt.hashSync('123456', 10)
        })
        await user.save();
    }
}

module.exports = createTestUser