$(document).ready(function () {

    let country = ['Brazil', 'United States', 'India', 'Japan', 'Indonesia', 'Chile', 'Spain', 'France', 'China', 'Greece', 'Poland', 'United Kingdom', 'Canada', 'Italy', 'Germany', 'Mexico']
    

    for (let i = 0; i < country.length; i++) {
        let button = $('<button>');
        button.text(country[i]);
        button.attr('class', 'btn btn-info')
        $('#buttons').append(button);
    }
    
    $("buttons").on("click", function () {
        let person = $(this).attr("data-person");
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response) {

                let results = response.data;

                for (let i = 0; i < results.length; i++) {
                    let gifDiv = $("<div>");

                    let rating = results[i].rating;

                    let p = $("<p>").text("Rating: " + rating);

                    let personImage = $("<img>");
                    personImage.attr("src", results[i].images.fixed_height.url);

                    gifDiv.prepend(p);
                    gifDiv.prepend(personImage);

                    $("#gifs-appear-here").prepend(gifDiv);
                }
            });
    });

});