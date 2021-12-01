$("#tab-customer").DataTable({
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
    var mskh = $(this).data("mskh");


    $("#editCustomerModal input[name='cmnd']").val(cmnd);
    $("#editCustomerModal input[name='mskh']").val(mskh);

    $("#editCustomerModal").modal("show");
});

$(".btn-delete").click(function (e) {
    var cmnd = $(this).data("cmnd");

    $("#deleteCustomerModal input[name='cmnd']").val(cmnd);

    $("#deleteCustomerModal").modal("show");
});
