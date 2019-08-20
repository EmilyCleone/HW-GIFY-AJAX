var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

var movies = ["Wet Hot American Summer", "La La Land", "Drive", "Dallas Buyers Club", "Walk Hard", "Eternal Sunshine of the Spotless Mind"];

function bLoop() {
    for (var i = 0; i < movies.length; i++) {
        document.getElementById("buttonContainer").innerHTML += "<button>" + movies[i] + "</button>";

    }
}

bLoop();

//pushes user input into movies array
$("#submitButton").on("click", function (event) {
    event.preventDefault();
    

        
        boxvalue = document.getElementById('formInput').value;
        movies.push(boxvalue);  
        console.log(boxvalue);
       
        bLoop(boxvalue);

});
