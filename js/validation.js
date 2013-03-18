
$(document).ready(function() {

$("#postUserSignInInfo").click(function() {
	$.ajax({
		url: "/backliftapp/userSignUp",
		type: "POST",
		dataType: "JSON",
		data: {
			firstName: $("#firstName").val(),
			lastName: $("#lastName").val(),
			attendSchool: $("#attendSchool").val(),
			schoolEmail: $("#schoolEmail").val(),
			userName: $("#userName").val(),
			userPassword: $("#userPassword").val(),
			repeatPassword: $("#repeatPassword").val(),
			birthDate: $("#birthDate").val()
		},
		success: function(data){
		}
	}); // end of ajax
});

$("#userSignUpForm").submit(function(e) {
		e.preventDefault();
	}).validate({
		rules: {
		firstName: {
			minlength: 2,
			maxlength: 30,
			required: true
		},
		lastName: {
			minlength: 2,
			maxlength: 30,
			required: true
		},
		attendSchool: {
			minlength: 2, 
			maxlength: 50,
			required: true
		},
		schoolEmail: {
			minlength: 2, 
			maxlength: 40,
			required: true
		},
		userName: {
			minlength: 8,
			maxlength: 24,
			required: true
		},
		userPassword: {
			minlength: 8, 
			maxlength: 24,
			required: true
		},
		repeatPassword: {
			minlength: 8,
			maxlength: 24,
			required: true
		},
		birthDate: {
			digits: true,
			required: true, 
			rangelength: [6,6]
		},
		subject: {
			selectNone: true
		},

		},
		highlight: function(label) {
			$(label).closest('.control-group').addClass('error');
		},
		success: function(label){
			label
				.text('OK!').addClass('valid')
				.closest('.control-group').addClass('success');
		},

	})

});


