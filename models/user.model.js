const mongoose = require('mongoose')

const User = new mongoose.Schema(
{
fname: { type: String, required: true },
email: { type: String, required: true, unique: true },
phone: { type: String, required: true },
pass: { type: String, required: true },
quote: { type: String },
},
{ collection: 'notes' }
)

const model = mongoose.model('Notes', User)

module.exports = model