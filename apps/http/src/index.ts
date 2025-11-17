import express from 'express'

const app = express()


app.get('/', (req, res) => {
    return res.json({
        message: "Welcome to a turbo-repo",
        success: true
    })
})
app.listen(4001, () => {

    console.log("running on 4001")
})