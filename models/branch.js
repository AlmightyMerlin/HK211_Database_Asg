var mysql = require("mysql-await");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "supermarket_n06",
});

exports.getAll = async function () {
    return await connection.awaitQuery("SELECT * FROM CHINHANH");
};

exports.get = async function (ma_chi_nhanh) {
    return (
        await connection.awaitQuery(`SELECT * FROM CHINHANH WHERE MA_CHI_NHANH = ${ma_chi_nhanh}`)
    )[0];
};

exports.insertOne = async function (dia_chi, ma_chi_nhanh, ten_chi_nhanh) {
    console.log(dia_chi, ma_chi_nhanh, ten_chi_nhanh);
    await connection.awaitQuery(
        `INSERT INTO CHINHANH (DIA_CHI, MA_CHI_NHANH, TEN_CHI_NHANH) VALUES ("${dia_chi}", "${ma_chi_nhanh}", "${ten_chi_nhanh}")`
    );
};

exports.updateOne = async function (dia_chi, ma_chi_nhanh, ten_chi_nhanh) {
    await connection.awaitQuery(
        `UPDATE CHINHANH SET TEN_CHI_NHANH = "${ten_chi_nhanh}", DIA_CHI = "${dia_chi}" WHERE MA_CHI_NHANH = ${ma_chi_nhanh}`
    );
};

exports.deleteOne = async function (ma_chi_nhanh) {
    await connection.awaitQuery(`DELETE FROM CHINHANH WHERE MA_CHI_NHANH = ${ma_chi_nhanh}`);
};
