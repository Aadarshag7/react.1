const sql=require("mysql2/promise");
const db=sql.createPool({
    host:"localhost",
    user:"root",
    password:"ag123",
    database:"agag",
});
module.exports=db;