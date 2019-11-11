function addNumbers(x, y) {
    return (x + y);
}

function subtractNumbers(a, b) {
    return (a - b);
}

function multiplyNumbers(d, e) {
    return (d * e);
}

function divideNumbers(p, q) {
    return (p / q);
}

$(document).ready(function() {
    
      $("#addNums").click(function() {
        var inputX = $("#inputNumOne").val();
        var inputY = $("#inputNumTwo").val();
        var addedXY = addNumbers(inputX, inputY)
        $("#addResult").html(addedXY);
        $('#inputNumOne').val('').focus();
        // $('#inputNumOne').focus();
        $('#inputNumTwo').val('');
      }); 


  });