$("#tab-manager").DataTable({
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
    var ma_chi_nhanh = $(this).data("ma_chi_nhanh");
    var ngay_bat_dau = $(this).data("ngay_bat_dau");

    $("#editManagerModal input[name='msnv']").val(msnv);
    $("#editManagerModal input[name='ma_chi_nhanh']").val(ma_chi_nhanh);
    $("#editManagerModal input[name='ngay_bat_dau']").val(ngay_bat_dau);

    $("#editManagerModal").modal("show");
});

$(".btn-delete").click(function (e) {
    var msnv = $(this).data("msnv");

    $("#deleteManagerModal input[name='msnv']").val(msnv);

    $("#deleteManagerModal").modal("show");
});
