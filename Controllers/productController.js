const client = require('../dbConnection.js')


module.exports = {
    getProduct: (req, res)=>{
        client.query(`Select * from products`, (err, result)=>{
            try {
                res.send(result.rows); 
                console.log("Request Fulfiled Successfully");
            } catch (error) {
                console.log(error)
            }
        });
        client.end;
    },
  
    
    getProductById: (req, res)=>{
        const id= req.params.id;
        console.log(id);
        client.query(`Select * from "products" where "Id"=${id}`,  (err, result)=>{
            try {
                res.send(result.rows); 
                console.log("Request Fulfiled Successfully");
            } catch (error) {
                console.log(error)
            }
        });
        client.end;
    },


    addProduct: (req, res)=> {
        const product =  req.body;
        console.log(product);
        let insertQuery = `insert into products 
                           values(${product.Id}, '${product.Name}', ${product.Price} , '${product.Description}', ${product.Quantity} , '${product.Color}')`
    
        client.query(insertQuery, (err, result)=>{
            
            try {
                res.send('Insertion was successful')
                console.log("Request Fulfiled Successfully");
            } catch (error) {
                console.log(error)
            }
        })
        client.end;
    },

    updateProduct:  (req, res)=> {
        const id= req.params.id;
        console.log(id);
        let product = req.body;
        console.log(product);
        let updateQuery = `update "products"
                           set 
                           "Name" = '${product.Name}',
                           "Price" = ${product.Price},
                           "Quantity" = ${product.Quantity}
                           where "Id" = ${id}`;
    
        client.query(updateQuery, (err, result)=>{
           
            try {
                res.send('Update successful')
                console.log("Request Fulfiled Successfully");
            } catch (error) {
                console.log(error)
            }
        })
        client.end;
    },



    deleteProduct:  (req, res)=> {
        const id= req.params.id;
        console.log(id);
        let insertQuery = `delete from "products" where "Id"=${id}`
    
        client.query(insertQuery, (err, result)=>{
            
            try {
                res.send('Deletion was successful')
                console.log("Request Fulfiled Successfully");
            } catch (error) {
                console.log(error)
            }
        })
        client.end;
    },



  };
  
