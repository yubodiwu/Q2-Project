"use strict";
window.onload = function() {
    console.log("working link");
    var body = document.getElementsByTagName("body")[0];
    var cookie = body.getAttribute("cookie");

    $.ajax({
        url: `http://localhost:3000/connections/${cookie}`,
        method: "GET",
        success: function(data) {
          console.log("ajax")
            console.log(data);
            var contactContainer = document.getElementById("contactContainer");
            var currentRow;
            for (let i = 0; i < data.length; i++) {
                if (i % 4 === 0) {
                    currentRow = document.createElement("div");
                    contactContainer.appendChild(currentRow);
                    currentRow.className = "row col m12";
                }
                var image = document.createElement("img");
                image.className = "images";
                image.setAttribute('src', data[i].pic_url);
                image.setAttribute("height", "300px");
                image.setAttribute("width", "300px");
                image.style.borderRadius = "10px";
                image.style.marginLeft = "1vh";
                currentRow.appendChild(image);
            }
        }
    });
}
