import express from 'express'
import dotenv from 'dotenv'
import  products from './data/products.js'
dotenv.config()

const app = express()

app.get('/api/products', (req, res) => { 
    res.json(products)
}); 

//get products by id and return single product
app.get('/api/products/:id', (req, res) => { 
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

//env 
const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`Sever running on port ${PORT} and mode ${process.env.NODE_ENV}`));