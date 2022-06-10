const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://MUBEENA:mubeena@myapp.psuejwj.mongodb.net/signDB")

app.post('/api/sign', async (req, res) => {
console.log(req.body)
try {
const newPassword = await bcrypt.hash(req.body.pass, 10)
await User.create({
fname: req.body.fname,
email: req.body.email,
phone: req.body.phone,
pass: newPassword,
})
res.json({ status: 'ok' })
} catch (err) {
res.json({ status: 'error', error: 'Duplicate email' })
}
})

app.post('/api/logn', async (req, res) => {
const user = await User.findOne({
email: req.body.email,
})

if (!user) {
return { status: 'error', error: 'Invalid login' }
}

const isPasswordValid = await bcrypt.compare(
req.body.pass,
user.pass
)

if (isPasswordValid) {
const token = jwt.sign(
{
fname: user.fname,
email: user.email,
},
'secret123'
)

return res.json({ status: 'ok', user: token })
} else {
return res.json({ status: 'error', user: false })
}
})

app.get("/api/data", async(req , res) => {
    User.find()
    .then(foundDetails => res.json(foundDetails))
})

app.listen(3001, function() {
    console.log("express server is running on server 3001");
})

