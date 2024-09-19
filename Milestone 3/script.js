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
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(name, "<p>\n<p><b>Email:</b>").concat(email, "<p>\n<p><b>Phone:</b>").concat(number, "<p>\n\n\n<h3>Education</h3>\n<p>").concat(education, "</P>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</P>\n\n<h3>Skills</h3>\n<p>").concat(skill, "</P>\n\n");
    //display of resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume element is missing');
    }
    ;
});
