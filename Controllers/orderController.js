const client = require('../dbConnection.js')

module.exports = {
    getOrder: (req, res)=>{
        client.query(`Select * from orders`, (err, result)=>{
            try {
                res.send(result.rows); 
                console.log("Request Fulfiled Successfully");
            } catch (error) {
                console.log(error)
            }
        });
        client.end;
    },
  
    
    getOrderById: (req, res)=>{
        const id= req.params.id;
        console.log(id);
        client.query(`Select * from "orders" where "Id"=${id}`,  (err, result)=>{
            try {
                res.send(result.rows); 
                console.log("Request Fulfiled Successfully");
            } catch (error) {
                console.log(error)
            }
        });
        client.end;
    },


    addOrder: (req, res)=> {
        const order =  req.body;
        console.log(order);
        let insertQuery = `insert into orders 
                           values(${order.Id}, ${order.CustomerFId}, ${order.ProductFId} , ${order.TotalPrice}, '${order.Date}' , '${order.Time}', '${order.Review}')`
    
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

    updateOrder:  (req, res)=> {
        const id= req.params.id;
        console.log(id);
        let order = req.body;
        console.log(order);
        let updateQuery = `update "orders"
                           set 
                           "CustomerFId" = '${order.CustomerFId}',
                           "ProductFId" = ${order.ProductFId},
                           "TotalPrice" = ${order.TotalPrice}
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



    deleteOrder:  (req, res)=> {
        const id= req.params.id;
        console.log(id);
        let insertQuery = `delete from "orders" where "Id"=${id}`
    
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
  
