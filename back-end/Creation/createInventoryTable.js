const pool = require("../pool");

async function createInventoryTable(){
    try{

        const createInventoryTableQuery = `
        CREATE TABLE IF NOT EXISTS Inventory(
            ID VARCHAR(50) PRIMARY KEY,
            Name VARCHAR(50) NOT NULL,
            Brand VARCHAR(50) NOT NULL,
            Quantity VARCHAR(50) NOT NULL
        );`;
        
        await pool.query(createInventoryTableQuery);
        console.log("Inventory Table successfully created (if not exists).");
    }
    catch(error){
        console.log("Error in creating Inventory Table: ",error);
    }
}

module.exports = createInventoryTable;