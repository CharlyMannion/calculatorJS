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
        var parsedX = parseInt(inputX);
        var inputY = $("#inputNumTwo").val();
        var parsedY = parseInt(inputY);
        var addedXY = addNumbers(parsedX, parsedY);
        $("#result").html(addedXY);
        $('#inputNumOne').val('').focus();
        $('#inputNumTwo').val('');
      }); 

      $("#subtractNums").click(function() {
        var inputX = $("#inputNumOne").val();
        var parsedX = parseInt(inputX);
        var inputY = $("#inputNumTwo").val();
        var parsedY = parseInt(inputY);
        var addedXY = subtractNumbers(parsedX, parsedY);
        $("#result").html(addedXY);
        $('#inputNumOne').val('').focus();
        $('#inputNumTwo').val('');
      });

      $("#multiplyNums").click(function() {
        var inputX = $("#inputNumOne").val();
        var parsedX = parseInt(inputX);
        var inputY = $("#inputNumTwo").val();
        var parsedY = parseInt(inputY);
        var addedXY = multiplyNumbers(parsedX, parsedY);
        $("#result").html(addedXY);
        $('#inputNumOne').val('').focus();
        $('#inputNumTwo').val('');
      });

      $("#divideNums").click(function() {
        var inputX = $("#inputNumOne").val();
        var parsedX = parseInt(inputX);
        var inputY = $("#inputNumTwo").val();
        var parsedY = parseInt(inputY);
        var addedXY = divideNumbers(parsedX, parsedY);
        $("#result").html(addedXY);
        $('#inputNumOne').val('').focus();
        $('#inputNumTwo').val('');
      });


  });

//   next, refactor