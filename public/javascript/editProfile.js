"use strict";
window.onload = function() {


    var addbutton = document.getElementById("add_button");
    var skillValue = document.getElementById("add_skill");
    var form = document.getElementsByTagName("form")[0];
    var cookie = form.getAttribute("cookie");
    console.log("cookie", cookie);

    addbutton.addEventListener("click", function(event) {
        console.log(skillValue.value);
        var newButton = document.createElement("input");
        if (skillValue.value.length > 0) {
            var newSkill = new Skills(newButton);
            console.log("newButton", newButton);
        }
    });

    // $("#editUserForm").ajaxForm({
    //     url: `http://localhost:3000/users/${cookie}`,
    //     type: 'put'
    // })
    console.log("ajax get request")
    $.ajax({
        type: 'get',
        url: `http://localhost:3000/users/${cookie}`,
        success: function(data) {
            console.log(data);
            data.skills.skills.forEach(function(element){
              var displayCurrentSkill = document.createElement("input");
              var currentSkill = new Skills(displayCurrentSkill, element);

            })
            // alert('form was submitted');
        }
    });
    $('#submit_button').bind('click', function(e) {
        console.log("hello");
        // e.preventDefault();

        $.ajax({
            type: 'put',
            url: `http://localhost:3000/users/${cookie}`,
            data: $('#editUserForm').serialize(),
            success: function(data) {
                console.log(data);
                // alert('form was submitted');
            }
        });

    });
};
var numberOfSkills = 0;

function Skills(newSkill, currentValue) {
    // this.button = newSkill;
    this.createSkill(newSkill, currentValue);
    newSkill.addEventListener("click", function() {
        this.remove();
    });
}
Skills.prototype.createSkill = (newSkill, currentValue) => {
    numberOfSkills = numberOfSkills + 1;
    var skillsBoard = document.getElementById("added_skills");
    var skillValue = document.getElementById("add_skill");
    var pixalWidth = 100;
    if(currentValue === !undefined){
      if (skillValue.value.length > 9 || currentValue.length > 9) {
          pixalWidth = 120;
      }
      if (skillValue.value.length > 15 || currentValue.length > 15) {
          pixalWidth = 150;
      }
      if (skillValue.value.length > 20 || currentValue.length > 20) {
          pixalWidth = 175;
      }
    }
    if (skillValue.value.length > 9) {
        pixalWidth = 120;
    }
    if (skillValue.value.length > 15) {
        pixalWidth = 150;
    }
    if (skillValue.value.length > 20) {
        pixalWidth = 175;
    }
    console.log(skillValue.value.length);
    if(currentValue === undefined){
      newSkill.setAttribute("value", skillValue.value);
    }else{
      newSkill.setAttribute("value", currentValue);
    }
    newSkill.setAttribute("name", `skill${numberOfSkills}`);
    newSkill.style.width = `${pixalWidth}px`;
    newSkill.style.marginRight = "10px"
    newSkill.setAttribute("type", "text");
    newSkill.className = "btn light-blue darken-1 skill_values";
    skillsBoard.appendChild(newSkill);
    skillValue.value = "";
};
Skills.prototype.remove = (newSkill) => {
    console.log("new skill", newSkill);
    var skillsBoard = document.getElementById("added_skills");
    skillsBoard.removeChild(newSkill);
};
