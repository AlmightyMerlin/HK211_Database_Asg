$("#tab-supervisor").DataTable({
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

$("#select-cmnd").select2({
	theme: "bootstrap4",
	placeholder: "Chọn số cmnd của người dùng",
});

$(".btn-edit").click(function (e) {
    var ma_nguoi_giam_sat = $(this).data("ma_nguoi_giam_sat");

    $("#editSupervisorModal input[name='ma_nguoi_giam_sat']").val(ma_nguoi_giam_sat);

    $("#editSupervisorModal").modal("show");
});

$(".btn-delete").click(function (e) {
    var ma_nguoi_giam_sat = $(this).data("ma_nguoi_giam_sat");

    $("#deleteSupervisorModal input[name='ma_nguoi_giam_sat']").val(ma_nguoi_giam_sat);

    $("#deleteSupervisorModal").modal("show");
});
