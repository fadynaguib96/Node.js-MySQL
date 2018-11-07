var inquirer = require("inquirer")
var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",

    database: "bamazon_db"

});

function itemDisplay() {

    var query = connection.query("SELECT item_id,product_name,price FROM products",

        function (err, response) {
            if (err) throw err;

            var strOut = '';
            for (var i = 0; i < response.length; i++) {
                strOut = '';
                strOut += 'Item ID: ' + response[i].item_id + '  //  ';
                strOut += 'Product Name: ' + response[i].product_name + '  //  ';
                strOut += 'Price: $' + response[i].price + '\n';

                console.log(strOut);
            }

            userInquiry()
        })



}

function userInquiry() {

    inquirer.prompt([
        {
            name: "id",
            message: "What is the id number of the item you are interested in?",
            type: "input"
        },
        {
            name: "quantity",
            message: "How many do you want to purchase?",
            type: "input"
        },
    ]).then(function (res) {

        var userID = res.id
        var userQuantity = res.quantity

        var query = connection.query("SELECT * FROM products WHERE ?",
            {

                item_id: userID
            },

            function (err, input) {
                if (err) throw err;

                if (input.length === 0) {
                    console.log('Please provide a correct id number');
                    itemDisplay()

                }

                else {

                    if (userQuantity <= input[0].stock_quantity) {

                        var queryUpdate = connection.query("UPDATE products SET ? WHERE ?",

                    
                        [
                            {
                              stock_quantity: input[0].stock_quantity - userQuantity
                            },
                            {
                                item_id : userID
                            }
                          ],
                    
                            
                            function (err, inputt) {
                                if (err) throw err;

                                console.log("Your order has been placed successfully! Your total cost is $" + userQuantity * input[0].price)

                                connection.end()


                            })




                    }

                    else {

                        console.log("Sorry, we have only " + input[0].stock_quantity + " units of that item! Please update your order!");

                        itemDisplay()

                    }


                }

            })












    })
}

itemDisplay()

