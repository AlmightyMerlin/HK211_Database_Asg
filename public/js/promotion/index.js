$("#tab-promotion").DataTable({
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
    var ma_khuyen_mai = $(this).data("ma_khuyen_mai");
    var ten_khuyen_mai = $(this).data("ten_khuyen_mai");
    var ngay_ap_dung = moment($(this).data("ngay_ap_dung")).format('DD/MM/YYYY');
    var ngay_het_han = moment($(this).data("ngay_het_han")).format('DD/MM/YYYY');

    $("#editPromotionModal input[name='ma_khuyen_mai']").val(ma_khuyen_mai);
    $("#editPromotionModal input[name='ten_khuyen_mai']").val(ten_khuyen_mai);
    $("#editPromotionModal select[name='ngay_ap_dung']").val(ngay_ap_dung);
    $("#editPromotionModal input[name='ngay_het_han']").val(ngay_het_han);

    $("#editPromotionModal").modal("show");
});

$(".btn-delete").click(function (e) {
    var ma_khuyen_mai = $(this).data("ma_khuyen_mai");

    $("#deletePromotionModal input[name='ma_khuyen_mai']").val(ma_khuyen_mai);

    $("#deletePromotionModal").modal("show");
});
