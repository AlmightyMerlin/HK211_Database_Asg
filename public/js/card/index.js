$("#tab-card").DataTable({
    responsive: true,
    lengthChange: false,
    autoWidth: false,
    language: {
        url: "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Vietnamese.json",
    },
    // buttons: [
    //     {
    //         text: "Thêm mới",
    //         action: function (e, dt, node, config) {
    //             window.location.href = "/faculty/add";
    //         },
    //     },
    // ],
});

$(".btn-edit").click(function (e) {
    var ma_so_the = $(this).data("ma_so_the");
    var diem_thuong = $(this).data("diem_thuong");
    var cap_bac_the = $(this).data("cap_bac_the");

    $("#editCardModal input[name='ma_so_the']").val(ma_so_the);
    $("#editCardModal input[name='diem_thuong']").val(diem_thuong);
    $("#editCardModal input[name='cap_bac_the']").val(cap_bac_the);
    $("#editCardModal").modal("show");
});

$(".btn-delete").click(function (e) {
    var cmnd = $(this).data("cmnd");

    $("#deleteCardModal input[name='cmnd']").val(cmnd);

    $("#deleteCardModal").modal("show");
});
