$("#tab-sohuu").DataTable({
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

$("#select-mskh").select2({
	theme: "bootstrap4",
	placeholder: "Chọn mã số khách hàng",
});

$(".btn-edit").click(function (e) {
    var mskh = $(this).data("mskh");
    var ma_so_the = $(this).data("ma_so_the");
    var ngay_dang_ky = $(this).data("ngay_dang_ky");

    $("#editOwnModal input[name='mskh']").val(mskh);
    $("#editOwnModal input[name='ma_so_the']").val(ma_so_the);
    $("#editOwnModal input[name='ngay_dang_ky']").val(ngay_dang_ky);
    $("#editOwnModal").modal("show");
});

$(".btn-delete").click(function (e) {
    var mskh = $(this).data("mskh");
    $("#deleteOwnhModal input[name='mskh']").val(mskh);

    $("#deleteOwnModal").modal("show");
});
