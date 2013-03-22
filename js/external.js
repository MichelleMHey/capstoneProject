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
  //$.ajax({
    //  type: "DELETE",
      //url: "/backliftapp/userCommentBelow/82e9101d-8cbf-4b69-b61f-693d7e1c0f75",
      //success: function(result) {
       // console.log("Deleted!");
     // }
  //}); // end of ajax



  // date picker
  $('#dp1').datepicker({
    format: 'mm-dd-yyyy'  
  });


 // auto complete for searching schools
 // using 'jQuery.ui' for the autocomplete, this will only let autocomplete load if jQuery ui is loaded.
 if(jQuery.ui) { 

    // holds the return value of 'getSchoolMap()' from JavaScript file 'school.js'
    var schoolMap = getSchoolMap(); 

    // 'Object.keys' gets list of all variable names on an object(everything in brackets in schools.js)
    var availableTags = Object.keys(schoolMap); 

    $("#tags").autocomplete({
      source: availableTags // references the 'availableTags' variable
    });
  }
 
  $("#search-form").submit(function(e) {
    e.preventDefault(); // stops default submit action from executing before it goes through below code
    
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
