// takes a list of schools and organizes them by letter to display on screen

$(document).ready(function() {

	var schoolStart = {}; 

	for(var key = 65; key <= 90; key++){ 
		schoolStart[String.fromCharCode(key)] = "<p>"; 
	}

	var schoolMap = getSchoolMap();  
	
	var schoolList = Object.keys(schoolMap);
	$.each(schoolList, function(i, val) { 
			schoolStart[val[0].toUpperCase()] += 
				"<a href='" + schoolMap[val] + "'>" + val + "</a><br/>"; //
	});

	for(var key = 65; key <= 90; key++){
		schoolStart[String.fromCharCode(key)] += "</p>"; // caps off letter block


		//console.log(String.fromCharCode(key));
		//console.log(schoolStart[String.fromCharCode(key)]);

		$("#displaySchoolPicked").html(
			$("#displaySchoolPicked").html() +schoolStart[String.fromCharCode(key)]
		);
	}	
});

function loadSchoolDataByFirstLetter(firstLetter) {

	var output = "<p>";  
	var schoolMap = getSchoolMap();
	var schoolList = Object.keys(schoolMap);
	$.each(schoolList, function(i, val) {
		if(val[0].toUpperCase() === firstLetter)
			output += "<a href='" + schoolMap[val] + "'>" + val + "</a><br/>";
	});

	output += "</p>";

	$("#displaySchoolPicked").html(output);
};