"use strict";
window.onload = function() {


    var addbutton = document.getElementById("add_button");
    var skillValue = document.getElementById("add_skill");
    addbutton.addEventListener("click", function(event) {
        console.log(skillValue.value);
        // var skillsBoard = document.getElementById("added_skills");
        var newButton = document.createElement("input");
        var newSkill = new Skills(newButton);
        console.log("newButton", newButton);

        // newButton.setAttribute("value", skillValue.value);
        // newButton.setAttribute("type", "button");
        // newButton.className = "btn light-blue darken-1 skill_values";
        // skillsBoard.appendChild(newButton);
    });
};
var numberOfSkills = 0;
function Skills(newSkill) {
    // this.button = newSkill;
    this.createSkill(newSkill);
    newSkill.addEventListener("click", function() {
        this.remove();
    });
}
Skills.prototype.createSkill = (newSkill) => {
    numberOfSkills = numberOfSkills + 1;
    var skillsBoard = document.getElementById("added_skills");
    var skillValue = document.getElementById("add_skill");
    newSkill.setAttribute("value", skillValue.value);
    newSkill.setAttribute("name", `skill${numberOfSkills}`);
    newSkill.setAttribute("type", "button");
    newSkill.className = "btn light-blue darken-1 skill_values";
    skillsBoard.appendChild(newSkill);
      skillValue.value = "";
};
Skills.prototype.remove = (newSkill) => {
  console.log("new skill",newSkill);
    var skillsBoard = document.getElementById("added_skills");
    skillsBoard.removeChild(newSkill);
};
