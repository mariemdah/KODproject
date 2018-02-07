$(function () {
    $('.check').iCheck({
        checkboxClass: 'icheckbox_flat',
        radioClass: 'iradio_flat'
    });

    $.each($('.flash-msg'), function (i , span) {
        var message_type = $(span).attr('data-type');
        var classname = "";
        switch( message_type) {
            case 'error' :
                classname = 'red';
                break;
            case 'notice' :
                classname = "light-blue";
                break;
            case 'success' :
                classname = "light-green";
                break;
        }
        Materialize.toast($(span).text(), 3000, classname);
    })
});