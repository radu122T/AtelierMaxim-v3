const path=require("path")
const express =require("express")
const app = express()
const publicPath = path.join(__dirname, "..","client", 'dist')
const publicPath2 = path.join(__dirname, "..","client", 'public')
const port = process.env.PORT || 3000

app.use(express.static(publicPath))
app.use(express.static(publicPath2))
app.use(express.json())
app.use(express.urlencoded)


app.get("*", (req,res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.post('/cart', (req,res) => {
    const {parce} = req.body
    console.log(parce)
    if (!parce) {
        return res.status(400).send({status:'failed'})
    }
    res.status(200).send({status:received})
})


app.listen(port, () => {
    console.log('server is up')
})
