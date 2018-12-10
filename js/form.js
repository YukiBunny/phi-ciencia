$(function () {
	$('#form_button').click(function () {
		var to = 'phiciencia@gmail.com';
		var subject = "?subject=" + $("#form_subject").val();
		var body = '&body=' + $('#form_message').val().replace(/\n/g, "%0D%0A") + '%0D%0A' + $('#form_ocupation').val();

		location.href = 'mailto:' + to + subject + body;

	});
	function formSubmit() {
		$('#form_subject').val('');
		$('#form_message').val('');
		$('#form_ocupation').val('0');
	}
});