var mysql = require("mysql-await");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "supermarket_n06",
});

exports.getAll = async function () {
    return await connection.awaitQuery("SELECT * FROM SOHUU");
};

exports.get = async function (mskh) {
    return (
        await connection.awaitQuery(`SELECT * FROM SOHUU WHERE MSKH = ${mskh}`)
    )[0];
};

exports.insertOne = async function (mskh, ma_so_the, ngay_dang_ky) {
    console.log(mskh, ma_so_the, ngay_dang_ky);
    await connection.awaitQuery(
        `INSERT INTO SOHUU (MSKH, MA_SO_THE, NGAY_DANG_KY) VALUES ("${mskh}", "${ma_so_the}", "${ngay_dang_ky}")`
    );
};

exports.updateOne = async function (mskh, ma_so_the, ngay_dang_ky) {
    await connection.awaitQuery(
        `UPDATE SOHUU SET MSKH = "${mskh}", MA_SO_THE = "${ma_so_the}" WHERE NGAY_DANG_KY = ${ngay_dang_ky}`
    );
};

exports.deleteOne = async function (mskh) {
    await connection.awaitQuery(`DELETE FROM SOHUU WHERE MSKH = ${mskh}`);
};
