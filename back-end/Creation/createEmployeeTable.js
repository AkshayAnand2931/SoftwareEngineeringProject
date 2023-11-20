const pool = require("../pool");

async function createEmployeeTable(){
    try{

        const createEmployeeTableQuery = `
        CREATE TABLE IF NOT EXISTS Employee(
            EmployeeID VARCHAR(50) PRIMARY KEY,
            Name VARCHAR(50) NOT NULL,
            EmailID VARCHAR(50) NOT NULL,
            Password VARCHAR(50) NOT NULL,
            PhoneNumber VARCHAR(50) NOT NULL,
            Role VARCHAR(50) NOT NULL
        );`;
        
        await pool.query(createEmployeeTableQuery);
        console.log("Employee Table successfully created (if not exists).");
    }
    catch(error){
        console.log("Error in creating Employee Table: ",error);
    }
}

module.exports = createEmployeeTable;