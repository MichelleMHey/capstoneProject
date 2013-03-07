
$(document).ready(function() {
	//function myPost() {
	$("#postComment").click(function() {
  console.log("whatever!");
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
  displayCommentToPage();
});

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
  }
}); // end of GET ajax
}; // end of displayCommentToPage function




//$.ajax({
//	type: "DELETE",
//	url: "/backliftapp/somecomment/",
//	success: function(result) {
//		console.log("Deleted!");
//	}
//}); // end of ajax

