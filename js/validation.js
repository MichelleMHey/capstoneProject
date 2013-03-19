(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#register-form").validate({
                rules: {
                    firstname: "required",
                    lastname: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 8
                    },
                    agree: "required"
                },
                messages: {
                    firstname: "Please enter your firstname",
                    lastname: "Please enter your lastname",
                    password: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 8 characters long"
                    },
                    email: "Please enter a valid SCHOOL email address",
                    agree: "Please accept our policy"
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);








/*$(document).ready(function() {

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



});*/


