var pingPong = function(number) {
  var returnArray = [];
  for (var index = 1; index <= number; index += 1) {
    if (index % 15 === 0){
      returnArray.push("pingpong");
    } else if (index % 3 === 0) {
      returnArray.push("ping");
    } else if (index % 5 === 0){
      returnArray.push("pong");
    } else {
      returnArray.push(index);
    }
 }
  return returnArray;
};



$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#numberInput").val());
    var result = pingPong(number);
    $(".returnArray").text(result);

    $("#result").show();
  });
});
