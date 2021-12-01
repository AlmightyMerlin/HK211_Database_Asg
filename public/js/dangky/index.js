$("#tab-dangky").DataTable({
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
    var msnv = $(this).data("msnv");
    var ma_so_the = $(this).data("ma_so_the");
    var mskh = $(this).data("mskh");
    var ngay_dang_ky = moment($(this).data("ngay_dang_ky")).format('DD/MM/YYYY');

    $("#editDangkyModal input[name='msnv']").val(msnv);
    $("#editDangkyModal input[name='ma_so_the']").val(ma_so_the);
    $("#editDangkyModal input[name='mskh']").val(mskh);
    $("#editDangkyModal input[name='ngay_dang_ky']").val(ngay_dang_ky);

    $("#editDangkyModal").modal("show");
});

$(".btn-delete").click(function (e) {
    var cmnd = $(this).data("cmnd");

    $("#deleteDangkyModal input[name='msnv']").val(msnv);

    $("#deleteDangkyModal").modal("show");
});
