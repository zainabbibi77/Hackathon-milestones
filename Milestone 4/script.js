//first we make variable
var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
//HANDLE FORM SUBMISSION
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skill = document.getElementById('skills').value;
    //generate the resume content
    var resumeHTML = "\n<h2><b> Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditabe=\"true\">".concat(name, "</span><p>\n<p><b>Email:</b><span contenteditabe=\"true\">").concat(email, "</span><p>\n<p><b>Phone:</b><span contenteditabe=\"true\">").concat(number, "</span><p>\n\n\n<h3>Education</h3>\n<p contenteditabe=\"true\">").concat(education, "</span></P>\n\n<h3>Experience</h3>\n<p contenteditabe=\"true\">").concat(experience, "</span></P>\n\n<h3>Skills</h3>\n<p contenteditabe=\"true\">").concat(skill, "</span></P>\n\n");
    //display of resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML; //is line ka matlab hai resume display(div wale k variable ka nam hai ) k andr jo data aye ga wo resume-display ki tarah show hoga
    }
    else {
        console.error('The resume element is missing');
    }
    ;
});
