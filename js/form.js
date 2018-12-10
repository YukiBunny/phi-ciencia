$(function () {
	$('form').submit(function (e) {
		e.preventDefault();
		enviarEmail();
		$('#form_subject').val('');
		$('#form_message').val('');
		$('#form_ocupation').val('');
		return false;
	})
});

function enviarEmail() {

	var to = 'phiciencia@gmail.com';
	var subject = "?subject=" + $("#form_subject").val();
	var body = '&body=' + $('#form_message').val().replace(/\n/g, "%0D%0A") + '%0D%0A' + $('#form_ocupation').val();

	window.open('mailto:' + to + subject + body, '_blank');
}