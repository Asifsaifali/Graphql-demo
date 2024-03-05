const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const zod = require('zod')


app.use(bodyParser.json())

//User Authenttication middlewares

// function userAuthentication(req, res, next) {
//     name = req.body.name,
//         password = req.body.password,
//         email = req.body.email
//     if (!name || !password || !email) {
//         res.json({
//             message: "Invalid inputs"
//         })
//     } else {
//         next()
//     }
// }

const Schema = zod.array(zod.number())

app.get('/user', (req, res) => {
    arr = req.body.arr
    if (!Schema.parse(arr)) {
        res.status(400).json({
            error: "Invalid value of inputs"
        })
    } else {
        res.json({
            data: arr
        })
    }
})

//Global catches

// app.use(function (err, req, res, next) {
//     res.json({
//         msg: "Something went wrong",
//         err: err.message
//     })

// })

app.listen(3000, () => {
    console.log("Server is running on")
})