(function($,W,D)  {
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#register-form").submit(function(event) {
				event.preventDefault(); 
			}).validate({
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
				submitHandler: function() { 
					postUserInfo();
					 $("#register-form")[0].reset();
				},
				success: function () {
					console.log("Validation succeeded.");
				}
            });
        }
    }

    // when the DOM has loaded setup form validation rules
    $(document).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);


function postUserInfo() {
	$.ajax({
	  type: "POST",
	  url: "/backliftapp/usersignup",
	  data: {
	   	firstName: $("#firstName").val(),
		lastName: $("#lastName").val(),
		attendSchool: $("#attendSchool").val(),
		schoolEmail: $("#schoolEmail").val(),
		userName: $("#userName").val(),
		password: $("#userPassword").val()
	   },
	  success: function(data) {
		 console.log(data);
	  }
    });
}


  // ajax DELETE user comments
  //$.ajax({
    //  type: "DELETE",
      //url: "/backliftapp/usersignup/",
      //success: function(result) {
        //console.log("Deleted!");
      //}
  //}); // end of ajax


$("#register-form input").val("");
