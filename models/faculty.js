var mysql = require("mysql-await");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "university",
});

exports.getAll = async function () {
    return await connection.awaitQuery("SELECT * FROM FACULTY");
};

exports.get = async function (id) {
    return (
        await connection.awaitQuery(`SELECT * FROM FACULTY WHERE F_ID = ${id}`)
    )[0];
};

exports.insertOne = async function (name, eyear) {
    await connection.awaitQuery(
        `INSERT INTO FACULTY (F_NAME, F_EYEAR) VALUES ("${name}", ${eyear})`
    );
};

exports.updateOne = async function (id, name, eyear) {
    await connection.awaitQuery(
        `UPDATE FACULTY SET F_NAME = "${name}", F_EYEAR = ${eyear} WHERE F_ID = ${id}`
    );
};

exports.deleteOne = async function (id) {
    await connection.awaitQuery(`DELETE FROM FACULTY WHERE F_ID = ${id}`);
};
