$(document).ready(function(){


  
  $("#addani").on("click", function(event){
    event.preventDefault();
 
    var userAnimal = $("#userAni").val().trim()
    var newBtn = $("<button>")

    

    $(newBtn).addClass("btn btn-secondary btn-sm anibtn")
    $(newBtn).attr("data-animal", userAnimal)
    $(newBtn).text(userAnimal)
    $("#btns").append(newBtn)
    $("#aniForm").trigger("reset")
    $(newBtn).after(" ")



  });

$(document).on("click", ".anibtn", function() {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=CAaRfHZXWFQtgLzOAXEeQaCC22T3PV3U&limit=10";
  console.log("a button was clicked")
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

         $("#gifs").prepend(gifDiv);
        }
      });

  });

  $("#clear").on("click",function(event){
    event.preventDefault();
    $("#gifs").empty()

  });


});