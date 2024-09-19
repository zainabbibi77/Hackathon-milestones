//first we make variable
const form= document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay= document.getElementById('resume-display') as HTMLDivElement;

//HANDLE FORM SUBMISSION
form.addEventListener('submit',(event:Event)=>{
event.preventDefault(); //prevent page reload

//collect values
const name= (document.getElementById('name') as HTMLInputElement ).value
const email= (document.getElementById('email') as HTMLInputElement ).value
const number= (document.getElementById('phone') as HTMLInputElement ).value
const education= (document.getElementById('education') as HTMLInputElement ).value
const experience= (document.getElementById('experience') as HTMLInputElement ).value
const skill= (document.getElementById('skills') as HTMLInputElement ).value


//generate the resume content

const resumeHTML=`
<h2><b> Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditabe="true">${name}</span><p>
<p><b>Email:</b><span contenteditabe="true">${email}</span><p>
<p><b>Phone:</b><span contenteditabe="true">${number}</span><p>


<h3>Education</h3>
<p contenteditabe="true">${education}</span></P>

<h3>Experience</h3>
<p contenteditabe="true">${experience}</span></P>

<h3>Skills</h3>
<p contenteditabe="true">${skill}</span></P>

`;

//display of resume

if(resumeDisplay){
    resumeDisplay.innerHTML=resumeHTML;      //is line ka matlab hai resume display(div wale k variable ka nam hai ) k andr jo data aye ga wo resume-display ki tarah show hoga
}else{
    console.error('The resume element is missing')
};
})
