/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*$("#main").append(['Abhilasha']); */

/*var awsomeThoughts = "  I am Abhilasha and I am awesome";
var newawsometh = awsomeThoughts.replace("awesome","Fun");

console.log(awsomeThoughts);
console.log(newawsometh);

$("#main").append(newawsometh);*/


// var biopic = bio.ImageUrl;
// var formattedBioPic = HTMLbioPic.replace("%data%",biopic);
// $("#header").append(formattedBioPic);

// //console.log(bio.name);
// $("#main").append(bio.role);
// $("#main").append(bio.contactInfo);
// $("#main").append(bio.welcomemsg);
// $("#main").append(bio.skills);//
//$("#main").append(bio.ImageUrl);
//$("#header").prepend(formattedName);

var bio = {
	"name":"Abhilasha Manyar",
 	"role":"Software Developer",
 	"contactInfo":{
 		"mobile":"9766722669",
 		"email":"abhilasha.manyar@gmail.com",
 		"github":"abhilasha17manyar",
 		"loaction":"Pune,India"
 	},
 	"welcomemsg":"I am software developer",
 	"skills": ["C#.net","Asp.Net","Javascript"]
 	//ImageUrl:"C:/Users/Aniket/Udacity/frontend-nanodegree-resume-master/images/me.jpg"
 }

 var education ={
 	"school" : [
	{
	"name":"Jijamata High School",
	"schoolcity" : "Aurangabad",
	"degree" : "10th",
	"grade" :"Distinction",
	"percentage":"78%",
	"year" : "2004"
},
{
	"name":"Shiv Chatrapati college",
	"city":"Cidco Aurangabad",
	"degeree" : "12th",
	"percentage" : "59%",
	"grade" :"Ist class",
	"year":"2006",
	"majors" : "Science"
},
{
	"name":"Vivekanand college",
	"city":"Aurangabad",
	"degeree" : "BCS",
	"percentage" : "65",
	"grade" :"Ist class",
	"year":2009,
	"majors" : "CS"
},
{
	"name":"Maulana Azad college",
	"city":"Aurangabad",
	"degeree" : "MCA",
	"percentage" : "69",
	"grade" :"Ist class",
	"year":2012,
	"majors" : "CS"
}

],
"onlineCourses" :[
{
	"title" :"Javascript Crash Course",
	"school" : "Udacity",
	"dates" : 2017
}]
 }

 var work ={
 	"jobs": [
 	{
 		"employer" :"Refelction Software Solutions Pvt.Ltd.",
 		"title" : "Software Developer",
 		"description" : "C#.net Developer worked on product development. Crave Invoice is main product of company",
 		"dates" :"July-2012 - Jan-2015"

 	}]
 }
var project={
	"projects":[
	{
		"title":"Crave Invoice",
		"dates" :["July-2012", "to", "Jan-2015"],
		"description":"Crave Invoice is Invoicing ,Accounting and Inventory Software"
		
	}]
}

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill =HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);

	formattedSkill =HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	//console.log(bio.skills[2]);
}

var formattedmob = HTMLmobile.replace("%data%",bio.contactInfo["mobile"]);
$("#topContacts").append(formattedmob);

var formattedEmail = HTMLemail.replace("%data%",bio.contactInfo["email"]);
$("#topContacts").append(formattedEmail);

var formattedGitHub = HTMLgithub.replace("%data%",bio.contactInfo["github"]);
$("#topContacts").append(formattedGitHub);

var formattedlocation = HTMLlocation.replace("%data%",bio.contactInfo["loaction"]);
$("#topcontacts").append(formattedlocation);

//for in loop displays jobs
//for(var i =0; i< work.jobs.length; i++)
function displayWork() {

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer= HTMLworkEmployer.replace("%data%",work.jobs[0].employer);
	
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
	
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formatteddates = HTMLworkDates.replace("%data%",work.jobs[0].dates);

	$(".work-entry:last").append(formatteddates);
	
	var formatteddescription = HTMLworkDescription.replace("%data%",work.jobs[0].description);
	$(".work-entry:last").append(formatteddescription);

	
}

displayWork();

//function to see the click of mouse location of x y cooridinates on the screen
$(document).click(function(loc){
var x = loc.pageX;
var y = loc.pageY;

logClicks(x,y);

});



function inName(name) {

name = name.trim().split(" ");
console.log(name);
name[1] = name[1].toUpperCase();
name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	// Don't delete this line!
    return name[0]+" "+name[1];


}
$('#main').append(internationalbutton);