$(document).ready(function() {


  // Posts users comment to server
  $("#postComment").click(function() {
    $.ajax({
        type: "POST",
        url: "/backliftapp/userCommentBelow",
        data: {
        userName: $("#userName").val(),
        userTags: $("#userTags").val(),
        userComment: $("#userComment").val()
        },
        success: function (result) {
          console.log(result);
        }   
      }); //end of POST ajax
      displayCommentToPage();
    });
    //displayCommentToPage();



  // Gets users comment from the server and displays it to webpage
  function displayCommentToPage() {
    $.ajax({
        type: "GET",
        url: "/backliftapp/userCommentBelow",
        success: function(result) {
          var commentDisplay = "";
            for(var i = 0; i < result.length; i++) {
              commentDisplay += "<div> User: " + result[i]["userName"] + "<br /> " + result[i]["userComment"] + "<br /></div>"; 
            }
          $("#displayUserComment").html(commentDisplay);
            console.dir(result);
        }
      }); // end of GET ajax
  }; // end of displayCommentToPage function


  // ajax DELETE user comments
  $.ajax({
      type: "DELETE",
      url: "/backliftapp/userCommentBelow/82e9101d-8cbf-4b69-b61f-693d7e1c0f75",
      success: function(result) {
        console.log("Deleted!");
      }
  }); // end of ajax



  // date picker
  $('#dp1').datepicker({
    format: 'mm-dd-yyyy'  
  });


  // form validation
  $(document).ready(function() {
    $("#userSignUpForm").submit(function(e) {
      e.preventDefault();
    }).validate({
      rules: {
        firstName: {
          minlength: 1,
          maxlength: 30,
          required: true
        },
        lastName: {
          minlength: 1,
          maxlength: 40,
          required: true
        },
        attendSchool: {

        }
      }
    })
  }); // end of form validation function  


 // auto complete for searching schools
 if(jQuery.ui) {
    
    var schoolMap = getSchoolMap();
    var availableTags = Object.keys(schoolMap);

    $("#tags").autocomplete({
      source: availableTags
    });
  }

  $("#search-form").submit(function(e) {
    e.preventDefault();
    var searchId = $("#tags").val();
    console.log(searchId);
    var searchTarget = getSchoolMap()[searchId];
    console.log(searchTarget);
    if(searchTarget) {
      window.location.href = searchTarget;
    } else {
      console.log("You should display an error message saying why it didn't go anywhere.");
    }
  });

  
}); // end of document ready and JavaScript
