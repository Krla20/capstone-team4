$(document).ready(function() {
    

    $("#filter").click(function() {
        makePredictions();
    });
});

// call Flask API endpoint
function makePredictions() {
    var carat = $("#carat").val();
    var cut = $("#cut").val();
    var color = $("#color").val();
    var clarity = $("#clarity").val();
    var tdepth = $("#tdepth").val();    
    var table = $("#table").val();
    var length = $("#length").val();
    var width = $("#width").val();
    var depth = $("#depth").val();

    // create the payload
    var payload = {
        "carat": carat,
        "cut": cut,
        "color": color,
        "clarity": clarity,
        "tdepth" : tdepth,
        "table": table,
        "length" : length,
        "width" : width,
        "depth" : depth,
    }

    // Perform a POST request to the query URL
    $.ajax({
        type: "POST",
        url: "/ml",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(returnedData) {
            
            $("#output").text("Your diamond should cost $" + returnedData['prediction']);
            
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });

}