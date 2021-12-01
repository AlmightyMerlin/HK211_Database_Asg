var mysql = require("mysql-await");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "supermarket_n06",
});

exports.getAll = async function () {
    return await connection.awaitQuery("SELECT * FROM NHANVIEN");
};

exports.get = async function (cmnd) {
    return (
        await connection.awaitQuery(`SELECT * FROM NHANVIEN WHERE CMND = "${cmnd}"`)
    )[0];
};

exports.insertOne = async function (cmnd, ma_nguoi_giam_sat, msnv) {
    console.log(cmnd, ma_nguoi_giam_sat, msnv);
    await connection.awaitQuery(
        `INSERT INTO NHANVIEN (CMND, MA_NGUOI_GIAM_SAT, MSNV) VALUES ("${cmnd}", "${ma_nguoi_giam_sat}", "${msnv}")`
    );
};

exports.updateOne = async function (cmnd, ma_nguoi_giam_sat, msnv) {
    await connection.awaitQuery(
        `UPDATE NHANVIEN SET CMND = "${cmnd}"", MA_NGUOI_GIAM_SAT = "${ma_nguoi_giam_sat}", MSNV = ${msnv}`
    );
};

exports.deleteOne = async function (cmnd) {
    await connection.awaitQuery(`DELETE FROM NHANVIEN WHERE CMND = ${cmnd}`);
};
