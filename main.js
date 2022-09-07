const client = require('./dbConnection')
const express = require('express');
const app = express();

//---------------Controllers-----------------------

const customerController = require("./Controllers/customerController");
const productController = require("./Controllers/productController");
const orderController = require("./Controllers/orderController");


app.listen(8000, ()=>{
    console.log("Sever is now listening at port 8000");
})
client.connect();


//----------------------------------------------------------------------------

//              Customer CRUD
//----------------------------------------------------------------------------


app.get('/customers', customerController.getCustomer );
app.get('/customers/:id', customerController.getCustomerById)


//-----------Insert Data----------------------

app.use(express.json())
app.post('/addCustomers', customerController.addCustomer)

//-----------Update Data----------------------

// app.use(express.json())
app.put('/customer/update/:id', customerController.updateCustomer)

//----------Delete Records -----------------------

app.delete('/customer/delete/:id', customerController.deleteCustomer)







//----------------------------------------------------------------------------

//              Product CRUD
//----------------------------------------------------------------------------


//-----------------Get Data---------------

app.get('/products', productController.getProduct )

app.get('/products/:id', productController.getProductById )
// client.connect();

//-----------Insert Data----------------------


app.post('/addProducts', productController.addProduct)

//-----------Update Data----------------------


app.put('/product/update/:id', productController.updateProduct )

//----------Delete Records -----------------------

app.delete('/product/delete/:id', productController.deleteProduct )






//----------------------------------------------------------------------------

//             Order CRUD
//----------------------------------------------------------------------------


//-----------------Get Data---------------

app.get('/orders', orderController.getOrder )

app.get('/orders/:id',orderController.getOrderById)
// client.connect();

//-----------Insert Data----------------------


app.post('/addOrders', orderController.addOrder  )

//-----------Update Data----------------------


app.put('/order/update/:id', orderController.updateOrder)

//----------Delete Records -----------------------

app.delete('/order/delete/:id', orderController.deleteOrder )

