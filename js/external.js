$(document).ready(function() {

  displayCommentToPage();

   // Gets users comment from the server and displays it to webpage
  function displayCommentToPage() {
    $("#displayUserComment").html("");
    $.ajax({
        type: "GET",
        url: "/backliftapp/userscomments",
        success: function(result) {
          //var commentDisplay = "";
            result.reverse();
            $.each(result, function(){/*for(var i = 0; i < result.length; i++)*/ {
               $("#displayUserComment").append("<div> User: " + this.userName + "<br /> " + this.userComment + "<br /></div>"); 
            };
            
            $('#commentBoxForm')[0].reset();
          });
        }

      }); // end of GET ajax
  }; // end of displayCommentToPage function


  // Posts users comment to server
  $("#postComment").click(function() {

    $.ajax({
        type: "POST",
        url: "/backliftapp/userscomments",
        data: {
        userName: $("#userName").val(),
        userTags: $("#userTags").val(),
        userComment: $("#userComment").val()
        },
        success: function (result) {
          console.log(result);

           displayCommentToPage();
        }   
         
      }); //end of POST ajax
      //displayCommentToPage();
    });

  // ajax DELETE user comments
  //$.ajax({
    //  type: "DELETE",
      //url: "/backliftapp/userscomments/",
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