var mysql = require("mysql-await");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "supermarket_n06",
});

exports.getAll = async function () {
    return await connection.awaitQuery("SELECT * FROM SODIENTHOAI");
};

exports.get = async function (cmnd) {
    return (
        await connection.awaitQuery(`SELECT * FROM SODIENTHOAI WHERE CMND = ${cmnd}`)
    )[0];
};

exports.insertOne = async function (cmnd, so_dien_thoai) {
    console.log(cmnd, so_dien_thoai);
    await connection.awaitQuery(
        `INSERT INTO SODIENTHOAI (CMND, SO_DIEN_THOAI) VALUES ("${cmnd}", "${so_dien_thoai}")`
    );
};

exports.updateOne = async function (cmnd, ho_ten, gioi_tinh, email, dia_chi, ngay_sinh) {
    await connection.awaitQuery(
        `UPDATE SODIENTHOAI SET CMND = ${cmnd}, SO_DIEN_THOAI = "${so_dien_thoai}" WHERE CMND = ${cmnd}`
    );
};

exports.deleteOne = async function (cmnd) {
    await connection.awaitQuery(`DELETE FROM SODIENTHOAI WHERE CMND = ${cmnd}`);
};
