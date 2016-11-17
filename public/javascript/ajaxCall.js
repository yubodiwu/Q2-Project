"use strict";
$(document).ready(function() {
    $('.carousel').carousel({
        dist: 0,
        shift: 0,
        padding: 20,
    })
});

console.log("working link");
$.ajax({
    url: 'http://localhost:3000/users',
    method: "GET",
    success: function(data) {
        console.log(data);
        data.forEach(function(element) {
            console.log(element);
            console.log(element.skills.skills);
            var userSession = document.getElementById("users");
            var userid = userSession.getAttribute("userid");
            console.log(userid);
            var container = document.getElementById("users");
            var card = document.createElement("div");
            var cardImageDiv = document.createElement("div");
            var image = document.createElement("img");
            var cardContent = document.createElement("div");
            var spanContent = document.createElement("span");
            var title = document.createElement("p");
            var request = document.createElement("input");
            var rightVert = document.createElement("i");
            // var paragraphContent = document.createElement("p");
            var cardReveal = document.createElement("div");
            var spanReveal = document.createElement("span");
            var rightClose = document.createElement("i");
            var paragraphReveal = document.createElement("p");
            var unorderedList = document.createElement("ul");
            container.className = "carousel";
            card.className = "card col m4 carousel-item";
            cardImageDiv.className = "card-image waves-effect waves-block waves-light";
            image.className = "activator";
            cardContent.className = "card-content inside_text";
            spanContent.className = "card-title activator grey-text text-darken-4 space";
            rightVert.className = "material-icons right";
            cardReveal.className = "card-reveal";
            spanReveal.className = "card-title grey-text text-darken-4";
            rightClose.className = "material-icons right";
            request.className = "btn light-blue darken-1 skill_values";
            paragraphReveal.className = "center-align";
            request.id = `${element.id}`;
            image.src = `${element.pic_url}`;
            spanContent.textContent = `${element.first_name} ${element.last_name}`;
            title.textContent = `${element.headline}`
            rightClose.textContent = "close";
            rightVert.textContent = "more_vert";
            paragraphReveal.textContent = "Skills";
            request.addEventListener("click", function(event) {
                $.post("http://localhost:3000/connections", {
                    connection_id: event.currentTarget.id,
                    user_id: userid
                }, function(data) {
                    console.log(data);
                })
            })
            request.setAttribute("value", "Request");
            request.setAttribute("type", "button");
            container.appendChild(card).appendChild(cardImageDiv).appendChild(image);
            card.appendChild(cardContent).appendChild(spanContent);
            spanContent.appendChild(rightVert);
            cardContent.appendChild(title);
            cardContent.appendChild(request);
            card.appendChild(cardReveal).appendChild(spanReveal)
            spanReveal.appendChild(rightClose);
            cardReveal.appendChild(paragraphReveal).appendChild(unorderedList);
            element.skills.skills.forEach(function(element) {
                var skillButton = document.createElement("input");
                skillButton.setAttribute("value", element);
                skillButton.setAttribute("type", "button");
                skillButton.className = "btn light-blue darken-1";
                skillButton.style.float = "left";
                skillButton.style.marginTop = "1vh";
                skillButton.style.marginRight = "5vh"
                unorderedList.appendChild(skillButton);
            });
        });
    }
});
