const router = require("express").Router();//import pakage express.router
let Customer = require("../models/customer");
// const customer = require("../models/customer");

                    // insert/add data-(post) http method
router.route("/add").post((req,res) =>{

    //font end eke ewana data tika gannawa reqest ekk widihata
    const id = req.body.id;
    const name = req.body.name;
    const address = req.body.address;
    const contact = Number(req.body.contact);

    const newCustomer = new Customer({

        id,
        name,
        address,
        contact                  
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


//uodate
router.route("/update/:id").put(async(res,req)=>{

    let userId = req.params.id;
    const {id,name,address,contact} = req.body; //destruchure
    
    const updateCustomer = {
        id,
        name,
        address,
        contact
    }
    const update = await Customer.findByIdAndUpdate(userId,updateCustomer)
    .then(()=>{

        res.status(200).send({status: "User Updated",user: update})
    }).cach((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with Updating data",error:err.message});
    })


    router.route("/delete/:id").delete(async (req,res)=>{
 
        let userId = req.params.id;

        await Customer.findByIdAndDelete(userId).then(()=>{
            res.status(200).send({status : "User deleted" })
        }).cach((err)=>{
            console.log(err.message);
            res.status(500).send({status : "Error with delete user",error : err.message});
        })
    })


})





module.exports = router;