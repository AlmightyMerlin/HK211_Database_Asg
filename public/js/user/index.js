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
    var ho_ten = $(this).data("ho_ten");
    var gioi_tinh = $(this).data("gioi_tinh");
    var email = $(this).data("email")
    var dia_chi = $(this).data("dia_chi");
    var ngay_sinh = moment($(this).data("ngay_sinh")).format('DD/MM/YYYY');

    $("#editUserModal input[name='cmnd']").val(cmnd);
    $("#editUserModal input[name='ho_ten']").val(ho_ten);
    $("#editUserModal select[name='gioi_tinh']").val(gioi_tinh);
    $("#editUserModal input[name='email']").val(email);
    $("#editUserModal input[name='dia_chi']").val(dia_chi);
    $("#editUserModal input[name='ngay_sinh']").val(ngay_sinh);

    $("#editUserModal").modal("show");
});

$(".btn-delete").click(function (e) {
    var cmnd = $(this).data("cmnd");

    $("#deleteUserModal input[name='cmnd']").val(cmnd);

    $("#deleteUserModal").modal("show");
});
