var mysql = require("mysql-await");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "supermarket_n06",
});

exports.getAll = async function () {
    return await connection.awaitQuery("SELECT * FROM KHUYENMAI");
};

exports.get = async function (ma_khuyen_mai) {
    return (
        await connection.awaitQuery(`SELECT * FROM KHUYENMAI WHERE MA_KHUYEN_MAI = "${ma_khuyen_mai}"`)
    )[0];
};

exports.insertOne = async function (ma_khuyen_mai, ten_khuyen_mai, ngay_ap_dung, ngay_het_han) {
    console.log(ma_khuyen_mai, ten_khuyen_mai, ngay_ap_dung, ngay_het_han);
    await connection.awaitQuery(
        `INSERT INTO KHUYENMAI (MA_KHUYEN_MAI, TEN_KHUYEN_MAI, NGAY_AP_DUNG, NGAY_HET_HAN) VALUES ("${ma_khuyen_mai}", "${ten_khuyen_mai}", ${ngay_ap_dung}, ${ngay_het_han})`
    );
};

exports.updateOne = async function (ma_khuyen_mai, ten_khuyen_mai, ngay_ap_dung, ngay_het_han) {
    await connection.awaitQuery(
        `UPDATE KHUYENMAI SET MA_KHUYEN_MAI = "${ma_khuyen_mai}", TEN_KHUYEN_MAI = "${ten_khuyen_mai}", NGAY_AP_DUNG = ${ngay_ap_dung}, NGAY_HET_HAN = ${ngay_het_han}  WHERE MA_KHUYEN_MAI = "${ma_khuyen_mai}"`
    );
};

exports.deleteOne = async function (ma_khuyen_mai) {
    await connection.awaitQuery(`DELETE FROM KHUYENMAI WHERE MA_KHUYEN_MAI = "${ma_khuyen_mai}"`);
};
