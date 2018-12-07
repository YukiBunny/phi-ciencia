$(function () {
    $('#form_button').sendMail() {
        //Variables
        var to = 'phiciencia@gmail.com";
        var subject = "?subject=" + $("#form_subject").val();
        var body = '&body=' + $('#form_message').val() + $('#form_ocupation');
        //Funcion
        window.open('mailto:' + to + subject + body, '_blank');
    }
})