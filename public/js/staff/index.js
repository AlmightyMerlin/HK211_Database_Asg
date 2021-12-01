$("#tab-user").DataTable({
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
    var cmnd = $(this).data("cmnd");
    var ma_nguoi_giam_sat = $(this).data("ma_nguoi_giam_sat");
    var msnv = $(this).data("msnv");

    $("#editUserModal input[name='cmnd']").val(cmnd);
    $("#editUserModal input[name='ho_ten']").val(ma_nguoi_giam_sat);
    $("#editUserModal select[name='gioi_tinh']").val(msnv);

    $("#editUserModal").modal("show");
});

$(".btn-delete").click(function (e) {
    var cmnd = $(this).data("cmnd");

    $("#deleteUserModal input[name='cmnd']").val(cmnd);

    $("#deleteUserModal").modal("show");
});
