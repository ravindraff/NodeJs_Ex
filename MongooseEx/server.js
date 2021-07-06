//import Modules
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyparser = require('body-parser');

//Create the Rest Object
let app = express();
//enable the cors Policy
app.use(cors());
//set the json as MIME Type
app.use(bodyparser.json());
//parse the client data
app.use(bodyparser.urlencoded({
    extended: false
}));
//connect to the database
mongoose.connect("mongodb+srv://nodejs_usr:admin@cluster0.6mktf.mongodb.net/nodejs_db?retryWrites=true&w=majority", {
    useNewUrlParser: true
});
//define and initialize the schema
const employeeSchema = new mongoose.Schema({
    e_id: Number,
    e_name: String,
    e_sal: Number
});
//apply above schema to database by using mongoose
const employees = mongoose.model('employees', employeeSchema);
//Create the Rest Api 
//create the Rest API For Insert Document
app.post('/employee', (req, res) => {
    const newRecord = new employees({
        e_id: req.body.e_id,
        e_name: req.body.e_name,
        e_sal: req.body.e_sal
    });
    newRecord.save((err, result) => {
        if (err) throw err;
        else {
            res.status(200).json({
                message: "Document added successfully..."
            });
        }
    })
});
//Craete the Rest API For get All documents
app.get('/allEmp', (req, res) => {
    employees.find({}, (err, docs) => {
        if (err) throw err;
        else {
            res.send(docs);
        }

    })
})


//assign the port no
app.listen(8080, () => {
    console.log("server started successfully")
})