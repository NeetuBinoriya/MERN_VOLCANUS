import express from 'express'

const app = express()

// CRUD => Create, Read, Update, Delete

// C => Create => POST
// R => Read => GET {U can access from browser as well}
// U => Update => PUT
// D => Delete => DELETE

const products = [
    { id: 1, title: 'I Phone 16', price: '120000' },
    { id: 2, title: 'One plus', price: '30000' },
    { id: 3, title: 'Google Pixels', price: '90000' },
    { id: 4, title: 'MI 6', price: '50000' },
]

// Read Get Method
app.get('/', (req, res) => {
    res.json({ messgae: "Getting All products", products })

})

// Create Post Method
app.post('/add', (req, res) => {
    const product = { id: Math.random(), title: 'Sony Experia', price: '65000' }
    products.push(product)
    res.json({ message: 'Your product has been added...! ', products })
})

// Update Put Method
app.put('/:id', (req, res) => {
    const productId = req.params.id
    const updatedData = { title: "New Gen Phone", price: "3000" };
    let i;
    for (i = 0; i < products.length; i++) {
        if (productId == products[i].id) {
            (products[i].title = updatedData.title),
                (products[i].price = updatedData.price),
                i = 0;
            break
        }
    }
    if (i == products.length) return res.json({ message: "inavalid ID" })
    res.json({ message: "This is your Product ID", productId })
})

app.delete("/:id", (req, res) => {
    const id = req.params.id
    // console.log("Id for delete",id);
    let newProducts = products.filter((data) => data.id != id);
    res.json({ message: "Your product has been deleted", newProducts })
})


const port = 2000;
app.listen(port, () => console.log(`Server is running on port ${port}`))
