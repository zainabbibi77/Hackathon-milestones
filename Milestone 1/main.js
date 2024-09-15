var WorkButton = document.getElementById('button');
var skills = document.getElementById('skills');
WorkButton.addEventListener('click', function () {
    if (skills.style.display === 'none') { //none matlab k  agr ye abhi hide hai to tm hide wali cond block krdo or visible krdo
        skills.style.display = 'block'; //skills ko
    }
    else { //else agr ye phle se visible hai hide(none) wali condition mai nh to tm iise hide wali condition mai       
        skills.style.display = 'none'; //le aoo us k liye ye none wali line walacode hai.
    }
});
