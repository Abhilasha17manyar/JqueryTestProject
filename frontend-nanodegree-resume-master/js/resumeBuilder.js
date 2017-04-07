/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*$("#main").append(['Abhilasha']); */

var awsomeThoughts = "  I am Abhilasha and I am awesome";
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
console.log(animal.length);
