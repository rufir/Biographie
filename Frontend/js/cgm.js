$(document).ready(function(e){
    $("#searchDoctor").click(function() {
        event.preventDefault();
        console.log("search");
    });
});

function searchDoctor(){
    $.ajax({
        type: "POST",
        url: "http://example.com",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        dataType: "json",
        success: function (data, status, jqXHR) {

            alert(success);
        },

        error: function (jqXHR, status) {
            // error handler
            console.log(jqXHR);
            alert('fail' + status.code);
        }
    });
}
