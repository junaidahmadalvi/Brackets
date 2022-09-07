const client = require('../dbConnection.js')

module.exports = {
    getCustomer: (req, res)=>{
        client.query(`Select * from customers`, (err, result)=>{
            try {
                res.send(result.rows); 
                console.log("Request Fulfiled Successfully");
            } catch (error) {
                console.log(error)
            }
        });
        client.end;
    },
  
    
    getCustomerById: (req, res)=>{
        const id= req.params.id;
        console.log(id);
        client.query(`Select * from "customers" where "Id"=${id}`,  (err, result)=>{
            try {
                res.send(result.rows); 
                console.log("Request Fulfiled Successfully");
            } catch (error) {
                console.log(error)
            }
        });
        client.end;
    },


    addCustomer: (req, res)=> {
        const customer =  req.body;
        console.log(customer);
        let insertQuery = `insert into customers 
                           values(${customer.Id}, '${customer.Name}', '${customer.Email}', ${customer.Phone} , '${customer.Address}')`
    
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

    updateCustomer:  (req, res)=> {
        const id= req.params.id;
        console.log(id);
        let customer = req.body;
        console.log(customer);
        let updateQuery = `update "customers"
                           set 
                           "Name" = '${customer.Name}',
                           "Email" = '${customer.Email}'
                           where "Id" = ${id}`;
    
        client.query(updateQuery, (err, result)=>{
           
            try {
                res.send('Update was successful')
                console.log("Request Fulfiled Successfully");
            } catch (error) {
                console.log(error)
            }
        })
        client.end;
    },



    deleteCustomer:  (req, res)=> {
        const id= req.params.id;
        console.log(id);
        let insertQuery = `delete from "customers" where "Id"=${id}`
    
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
  


