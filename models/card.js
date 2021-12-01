var mysql = require("mysql-await");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "supermarket_n06",
});

exports.getAll = async function () {
    return await connection.awaitQuery("SELECT * FROM THE");
};

exports.get = async function (ma_so_the) {
    return (
        await connection.awaitQuery(`SELECT * FROM THE WHERE MA_SO_THE = ${ma_so_the}`)
    )[0];
};

exports.insertOne = async function (ma_so_the, diem_thuong, cap_bac_the) {
    console.log(ma_so_the, diem_thuong, cap_bac_the);
    await connection.awaitQuery(
        `INSERT INTO THE (MA_SO_THE, DIEM_THUONG, CAP_BAC_THE) VALUES ("${ma_so_the}", ${diem_thuong}, "${cap_bac_the}")`
    );
};

exports.updateOne = async function (ma_so_the, diem_thuong, cap_bac_the) {
    await connection.awaitQuery(
        `UPDATE THE SET MA_SO_THE = "${ma_so_the}", DIEM_THUONG = ${diem_thuong}, CAP_BAC_THE = "${cap_bac_the}" WHERE MA_SO_THE = ${ma_so_the}`
    );
};

exports.deleteOne = async function (ma_so_the) {
    await connection.awaitQuery(`DELETE FROM THE WHERE MA_SO_THE = ${ma_so_the}`);
};
