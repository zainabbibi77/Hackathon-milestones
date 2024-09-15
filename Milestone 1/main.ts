const WorkButton=document.getElementById('button') as HTMLButtonElement
const skills=document.getElementById('skills')  as HTMLElement


WorkButton.addEventListener('click', ()=>{
    if(skills.style.display==='none'){        //none matlab k  agr ye abhi hide hai to tm hide wali cond block krdo or visible krdo
        skills.style.display = 'block'    //skills ko
    }
    else{                            //else agr ye phle se visible hai hide(none) wali condition mai nh to tm iise hide wali condition mai       
        skills.style.display ='none'    //le aoo us k liye ye none wali line walacode hai.
    }
});







