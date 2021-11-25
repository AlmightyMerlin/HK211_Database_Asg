$("#tab-phone").DataTable({
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
    var so_dien_thoai = $(this).data("so_dien_thoai");

    $("#editPhoneModal input[name='cmnd']").val(cmnd);
    $("#editPhoneModal input[name='so_dien_thoai']").val(so_dien_thoai);

    $("#editPhoneModal").modal("show");
});

$(".btn-delete").click(function (e) {
    var cmnd = $(this).data("cmnd");

    $("#deletePhoneModal input[name='cmnd']").val(cmnd);

    $("#deletePhoneModal").modal("show");
});
