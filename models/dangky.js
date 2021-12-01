var mysql = require("mysql-await");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "supermarket_n06",
});

exports.getAll = async function () {
    return await connection.awaitQuery("SELECT * FROM DANGKY");
};

exports.get = async function (MSNV) {
    return (
        await connection.awaitQuery(`SELECT * FROM DANGKY WHERE MSNV = ${msnv}`)
    )[0];
};

exports.insertOne = async function (msnv, ma_so_the, mskh, ngay_dang_ky) {
    console.log(msnv, ma_so_the, mskh, ngay_dang_ky);
    await connection.awaitQuery(
        `INSERT INTO DANGKY (MSNV, MA_SO_THE, MSKH, NGAY_DANG_KY) VALUES ("${msnv}", "${ma_so_the}", "${ma_so_khach_hang}", ${ngay_dang_ky})`
    );
};

exports.updateOne = async function (msnv, ma_so_the, mskh, ngay_dang_ky) {
    await connection.awaitQuery(
        `UPDATE DANGKY SET MSNV = "${msnv}", MA_SO_THE = ${ma_so_the}, MSKH = "${mskh}", NGAY_DANG_KY = ${ngay_dang_ky}`
    );
};

exports.deleteOne = async function (MSNV) {
    await connection.awaitQuery(`DELETE FROM DANGKY WHERE MSNV = ${msnv}`);
};
