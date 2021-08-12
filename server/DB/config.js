
// connect to db
const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mesima_3_oren_sayag",
});

con.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("Connected to mysql");
});

// wrapper
const myQuery = (q) => {
    return new Promise((resolve, reject)=>{
        con.query(q,(err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}

// EXPORT
module.exports = { myQuery };