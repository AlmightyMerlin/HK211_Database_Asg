var mysql = require("mysql-await");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "supermarket_n06",
});

exports.getAll = async function () {
    return await connection.awaitQuery("SELECT * FROM NGUOIGIAMSAT");
};

exports.get = async function (ma_nguoi_giam_sat) {
    return (
        await connection.awaitQuery(`SELECT * FROM NGUOIGIAMSAT WHERE CMND = ${ma_nguoi_giam_sat}`)
    )[0];
};

exports.insertOne = async function (ma_nguoi_giam_sat) {
    console.log(ma_nguoi_giam_sat);
    await connection.awaitQuery(
        `INSERT INTO NGUOIGIAMSAT (MA_NGUOI_GIAM_SAT) VALUES ("${ma_nguoi_giam_sat}")`
    );
};

exports.updateOne = async function (cmnd, so_dien_thoai) {
    await connection.awaitQuery(
        `UPDATE NGUOIGIAMSAT SET MA_NGUOI_GIAM_SAT = "${ma_nguoi_giam_sat}" WHERE ma_nguoi_giam_sat = ${ma_nguoi_giam_sat}`
    );
};

exports.deleteOne = async function (ma_nguoi_giam_sat) {
    await connection.awaitQuery(`DELETE FROM NGUOIGIAMSAT WHERE MA_NGUOI_GIAM_SAT = ${ma_nguoi_giam_sat}`);
};
