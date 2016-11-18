"use strict";
window.onload = function() {


    var addbutton = document.getElementById("add_button");
    var skillValue = document.getElementById("add_skill");
    addbutton.addEventListener("click", function(event) {
        console.log(skillValue.value);
        var newButton = document.createElement("input");
        if (skillValue.value.length > 0) {
            var newSkill = new Skills(newButton);
            console.log("newButton", newButton);
        }
    });
    var form = document.getElementsByTagName("form")[0];
    var cookie = form.getAttribute("cookie");
    console.log("cookie", cookie);
    // $("#editUserForm").ajaxForm({
    //     url: `http://localhost:3000/users/${cookie}`,
    //     type: 'put'
    // })
    $('#submit_button').bind('click', function (e) {
        console.log("hello");
        e.preventDefault();

        $.ajax({
            type: 'put',
            url: `http://localhost:3000/users/${cookie}`,
            data: $('#editUserForm').serialize(),
            success: function(data) {
                console.log(data);
                alert('form was submitted');
            }
        });

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
    var pixalWidth = 100;
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
    newSkill.setAttribute("value", skillValue.value);
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
