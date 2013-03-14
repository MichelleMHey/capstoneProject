$(document).ready(function() {

	var schoolStartA = "<p><a href='../index.html'>Auburn University</a><br/><a href='#'>Alabama State University</a></p>";
  	
  	var schoolStartB = "<p><a href='#'>Belmont University</a><br/></p>";


	$("#schoolsStartWithA").click(function() {
		$("#displaySchoolPicked").html(schoolStartA);
	});
	$("#schoolsStartWithB").click(function() {
		$("#displaySchoolPicked").html(schoolStartB);
	});
});

