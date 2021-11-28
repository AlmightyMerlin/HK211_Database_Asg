var mysql = require("mysql-await");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "supermarket_n06",
});

exports.getAll = async function () {
    return await connection.awaitQuery("SELECT * FROM QUANLY");
};

exports.get = async function (msnv) {
    return (
        await connection.awaitQuery(`SELECT * FROM QUANLY WHERE MSNV = ${msnv}`)
    )[0];
};

exports.insertOne = async function (msnv, ma_chi_nhanh, ngay_bat_dau) {
    console.log(msnv, ma_chi_nhanh, ngay_bat_dau);
    await connection.awaitQuery(
        `INSERT INTO QUANLY (MSNV, MA_CHI_NHANH, NGAY_BAT_DAU) VALUES ("${msnv}", "${ma_chi_nhanh}", "${ngay_bat_dau}")`
    );
};

exports.updateOne = async function (msnv, ma_chi_nhanh, ngay_bat_dau) {
    await connection.awaitQuery(
        `UPDATE QUANLY SET MA_CHI_NHANH = "${ma_chi_nhanh}" NGAY_BAT_DAU = "${ngay_bat_dau}" WHERE MSNV = ${msnv}`
    );
};

exports.deleteOne = async function (msnv) {
    await connection.awaitQuery(`DELETE FROM QUANLY WHERE MSNV = ${msnv}`);
};
