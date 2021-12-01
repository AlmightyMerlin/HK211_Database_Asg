$("#tab-branch").DataTable({
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

$("#select-ma_chi_nhanh").select2({
	theme: "bootstrap4",
	placeholder: "Chọn mã chi nhánh",
});

$(".btn-edit").click(function (e) {
    var ma_chi_nhanh = $(this).data("ma_chi_nhanh");
    var dia_chi = $(this).data("dia_chi");
    var ten_chi_nhanh = $(this).data("ten_chi_nhanh");

    $("#editBranchModal input[name='ma_chi_nhanh']").val(ma_chi_nhanh);
    $("#editBranchModal input[name='dia_chi']").val(dia_chi);
    $("#editBranchModal input[name='ten_chi_nhanh']").val(ten_chi_nhanh);
    $("#editBranchModal").modal("show");
});

$(".btn-delete").click(function (e) {
    var ma_chi_nhanh = $(this).data("ma_chi_nhanh");
    $("#deleteBranchModal input[name='ma_chi_nhanh']").val(ma_chi_nhanh);

    $("#deleteBranchModal").modal("show");
});
