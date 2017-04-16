/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*$("#main").append(['Abhilasha']); */

/*var awsomeThoughts = "  I am Abhilasha and I am awesome";
var newawsometh = awsomeThoughts.replace("awesome","Fun");

console.log(awsomeThoughts);
console.log(newawsometh);

$("#main").append(newawsometh);

var s = "audacity";
var animal = ["animal"]
var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
   // var copiedtext= 'audacity'.slice(2);

    //var utext= 'U'+copiedtext;
   // s.replace("audacity","Udacity");
    s= 'U'+s.slice(2);
    
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));
console.log(animal.length);//array length return */


//Test Code for Array pop and push methods
var smapleArray = [0,0,7];

var incLastArrayElement = function(_array){
	var newArray = [];

	newArray = _array.slice(0);
	var lastNum = newArray.pop();
	newArray.push(lastNum + 1);

	return newArray;
};
console.log(incLastArrayElement(smapleArray));


//Test code for strung manipulations
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    // Your code goes here!
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

//test code for string 
var s = "audacity";
var animal = ["animal"]
var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
   // var copiedtext= 'audacity'.slice(2);

    //var utext= 'U'+copiedtext;
   // s.replace("audacity","Udacity");
    s= 'U'+s.slice(2);
    
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));
console.log(animal.length);//array length return


//code for the Dot and bracket notaion object declaration.

var work ={};
work.position = "Developer";
work.year="0.3";

var education ={};
education["city"]="Pune";
education["degree"] ="MCA";

//$("#main").append(work["position"]);
//$("#main").append(education.city);

//code for the Json Validations

var educations =
 {
	"schools": [
	{
	"name":"Jijamata High School",
	"schoolcity" : "Aurangabad",
	"degree" : "10th"
},
{
	"name":"Shiv Chatrapati college",
	"city":"Cidco Aurangabad",
	"degeree" : "12th"
}

]
};

//Eaxmple for the dot notation and bracket notation
var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};

// Use console.log() to figure out if dot and/or bracket notation
// will work to access the properties below. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.

// For example, uncomment the line below to see if you can use dot notation to access `property1`.
 console.log(weirdObject.property-2);
 console.log(weirdObject["property-2"]);

// I'll give you the first answer. The rest are set to false. Try out each property and
// if you can use dot or bracket notation to access it, change the answer to true!

// property
var dotNotation0 = true;
var bracketNotation0 = true;

// property1
var dotNotation1 = true;
var bracketNotation1 = true;

// property-2
var dotNotation2 = false;
var bracketNotation2 = true;

// property 3
var dotNotation3 = false;
var bracketNotation3 = true;

// property$
var dotNotation4 = true;
var bracketNotation4 = true;

// *space*property
var dotNotation5 = false;
var bracketNotation5 = true;

// property()
var dotNotation6 = false;
var bracketNotation6 = true;

// property[]
var dotNotation7 = false;
var bracketNotation7 = true;

// 8property
var dotNotation8 = false;
var bracketNotation8 = true;



//code for the while loop
var cameron = {};
cameron.job = "course dev";

var makecourse = function() {
	//make course
	console.log("made a course");

}
//while loop demo
var courses = 0;
while(cameron.job ==="course dev"){
	makecourse();
	courses =courses + 1;
	if(courses === 10)
	{
		cameron.job="learning specialist";
	}
}
console.log(cameron.job);

//for loop demo
for(var i =0; i<9 ; i++)
{
	console.log(i);
}
//
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
	var locationarrr = [];
	for(var i =0 ;i<work.jobs.length;i++){
		var newloc = work.jobs[i].location;
		locationarrr.push(newloc);
	}
	return locationarrr;

}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));