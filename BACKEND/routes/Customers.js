const router = require("express").Router();//import pakage express.router
let Customer = require("../models/Customers");
const customer = require("../models/customer");

                    // insert/add data-(post) http method
router.route("/add").post((req,res) =>{

    //font end eke ewana data tika gannawa reqest ekk widihata
    const id = Number(req.body.id);
    const name = req.body.name;
    const address = req.body.address;
    const gender = req.body.gender;

    const newCustomer = new Customer({

        id,
        name,
        address,
        gender
    })

    newCustomer.save().then(()=>{
        res.json("Customer Added...!")
    }).cach((err)=>{
        console.log(err);
    })


})

router.route("/").get((req,res)=>{

    //Customer kiyana model eke
    Customer.find().then((customers)=>{
        res.json(customers)
    }).cach((err)=>{
        console.log(err)
    })
})


module.exports = router;