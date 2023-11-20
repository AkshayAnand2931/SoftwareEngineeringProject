const express = require("express");
const app = express();
const cors = require("cors");

const createEmployeeTable = require("./Creation/createEmployeeTable");
const createInventoryTable = require("./Creation/createInventoryTable");
const pool = require("./pool");

app.use(cors())
app.use(express.json())

async function createAllTables(){
    await createEmployeeTable();
    await createInventoryTable();
}

createAllTables();

app.listen(5000,() => {
    console.log("Server is running on port 5000")
})

app.post("/Login",async (req,res) => {
    try{
        const formDetails = req.body;
        const EmployeeID = formDetails.EmployeeID;

        const result = await pool.query(`
        SELECT * 
        FROM Employee
        WHERE EmployeeID = $1
        ;`,[EmployeeID]);
        const rowCount = result.rowCount;

        if(rowCount == 1){
            const password = result.rows[0].password;
            const givenPassword = formDetails.Password;

            if(givenPassword == password){
                res.json({"Success":"Successfully logged in.","Role":result.rows[0].role});
                console.log("Successfully logged in. Role",result.rows[0].role);
            }
            else{
                res.json({"Error":"Incorrect Password. Please try again."});
                console.log("Incorrect Password. Please try again.");
            }
        }
        else{
            res.json({"Error":"Employee does not exist."});
            console.log("Employee does not exist.");
        }
    }
    catch(err){
        console.log(err);
    }
});

app.post("/Register", async (req,res) =>{
    try{
        const formDetails = req.body;
        const EmployeeID = formDetails.EmployeeID;
        console.log(formDetails);

        const result = await pool.query(`
        SELECT * 
        FROM Employee
        WHERE EmployeeID = $1
        ;`,[EmployeeID]);
        const rowCount = result.rowCount;

        if(rowCount == 1){
            res.json({"Error":"Employee altready exists."});
            console.log("Employee already exists.");
        }
        else{
            const result = await pool.query(`
            INSERT INTO Employee(EmployeeID,Name,EmailID,Password,PhoneNumber,Role)
            VALUES ($1,$2,$3,$4,$5,$6)
            RETURNING *
            ;`,[formDetails.EmployeeID,formDetails.Name,formDetails.EmailID,formDetails.Password,formDetails.PhoneNumber,formDetails.Role]);

            res.json(result.rows[0]);
            console.log(result.rows[0]);
        }
    }
    catch(err){
        console.log(err);
    }
});

app.get("/Inventory", async (req,res) => {
    try{
        const result = await pool.query(`
        SELECT *
        FROM Inventory
        ;`);
        
        console.log(result.rows);
        res.json(result.rows);
    }
    catch(err){
        console.log(err);
    }
});

app.post("/Inventory", async (req,res) =>{
    try{

        const formDetails = req.body;
        const ID = formDetails.id;
        const result = await pool.query(`
        SELECT *
        FROM Inventory
        WHERE ID = $1
        ;`,[ID]);
        const rowCount = result.rowCount;

        if(rowCount == 1){
            console.log("Product already exists. Update instead.");
            res.json({"Error":"Product already exists. Update instead."});
        }
        else{
            const result = await pool.query(`
            INSERT INTO Inventory(ID,Name,Brand,Quantity)
            VALUES($1,$2,$3,$4)
            RETURNING *
            ;`,[ID,formDetails.name,formDetails.brand,formDetails.quantity]);
            
            res.json(result.rows[0]);
            console.log(result.rows[0]);
        }
    }
    catch(err){
        console.log(err);
    }
});


app.put("/Inventory", async (req,res) =>{
    try{
        const formDetails = req.body;
        console.log(formDetails);
        const ID = formDetails.id;
        const result = await pool.query(`
        SELECT *
        FROM Inventory
        WHERE ID = $1
        ;`,[ID]);
        const rowCount = result.rowCount;

        if(rowCount == 1){
            const result = await pool.query(`
            UPDATE Inventory
            SET Name = $1,
            Brand = $2,
            Quantity = $3
            WHERE ID = $4
            RETURNING *
            ;`,[formDetails.name,formDetails.brand,formDetails.quantity,ID]);

            res.json(result.rows[0]);
            console.log(result.rows[0]);
        }
        else{
            res.json({"Error":"The product does not exist yet. Please create it first."});
            console.log("The product does not exist yet. Please create it first.");
        }
    }
    catch(err){
        console.log(err);
    }
});


app.delete("/Inventory/:id", async (req,res) =>{
    try{
        const ID = req.params.id;
        const result = await pool.query(`
        SELECT *
        FROM Inventory
        WHERE ID = $1
        ;`,[ID]);
        const rowCount = result.rowCount;

        if(rowCount == 1){

            const result = await pool.query(`
            DELETE FROM Inventory
            WHERE ID = $1
            RETURNING *
            ;`,[ID]);
            
            console.log(result.rows[0]);
            res.json(result.rows[0]);
        }
    }
    catch(err){
        console.log(err);
    }
});