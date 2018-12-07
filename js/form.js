$(function () {
    $('#form_button').click(function () {
        var to = 'phiciencia@gmail.com';
        var subject = "?subject=" + $("#form_subject").val();
        var body = '&body=' + $('#form_message').val() + '%0D%0A' + $('#form_ocupation').val();

        window.open('mailto:' + to + subject + body, '_blank');

    })
})