var mysql = require("mysql-await");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "supermarket_n06",
});

exports.getAll = async function () {
    return await connection.awaitQuery("SELECT * FROM NGUOIDUNG");
};

exports.get = async function (cmnd) {
    return (
        await connection.awaitQuery(`SELECT * FROM NGUOIDUNG WHERE CMND = ${cmnd}`)
    )[0];
};

exports.insertOne = async function (cmnd, ho_ten, gioi_tinh, email, dia_chi, ngay_sinh) {
    console.log(cmnd, ho_ten, gioi_tinh, email, dia_chi, ngay_sinh);
    await connection.awaitQuery(
        `INSERT INTO NGUOIDUNG (CMND, HO_TEN, GIOI_TINH, EMAIL, DIA_CHI, NGAY_SINH) VALUES ("${cmnd}", "${ho_ten}", "${gioi_tinh}", "${email}", "${dia_chi}", ${ngay_sinh})`
    );
};

exports.updateOne = async function (cmnd, ho_ten, gioi_tinh, email, dia_chi, ngay_sinh) {
    await connection.awaitQuery(
        `UPDATE NGUOIDUNG SET CMND = ${cmnd}, HO_TEN = "${ho_ten}", GIOI_TINH = ${gioi_tinh}, EMAIL = "${email}", DIA_CHI = "${dia_chi}", NGAY_SINH = "${ngay_sinh}" WHERE CMND = ${cmnd}`
    );
};

exports.deleteOne = async function (cmnd) {
    await connection.awaitQuery(`DELETE FROM NGUOIDUNG WHERE CMND = ${cmnd}`);
};
