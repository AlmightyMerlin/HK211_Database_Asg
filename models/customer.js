var mysql = require("mysql-await");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "supermarket_n06",
});

exports.getAll = async function () {
    return await connection.awaitQuery("SELECT * FROM KHACHHANG");
};

exports.get = async function (cmnd) {
    return (
        await connection.awaitQuery(`SELECT * FROM KHACHHANG WHERE CMND = ${cmnd}`)
    )[0];
};

// exports.insertOne = async function (cmnd, mskh) {
//     console.log(cmnd, mskh);
//     await connection.awaitQuery(
//         `INSERT INTO KHACHHANG (CMND, MSKH) VALUES ("${cmnd}", "${mskh}")`
//     );
// };

exports.updateOne = async function (cmnd, mskh) {
    await connection.awaitQuery(
        `UPDATE KHACHHANG SET MSKH = "${mskh}" WHERE CMND = ${cmnd}`
    );
};

exports.deleteOne = async function (cmnd) {
    await connection.awaitQuery(`DELETE FROM KHACHHANG WHERE CMND = ${cmnd}`);
};
