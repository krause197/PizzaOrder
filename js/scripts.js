function pizza(size, selectToppings) {
  this.size = size;
  this.selectToppings = selectToppings;
  this.totalCost;
}

pizza.prototype.price = function() {
  var pizzaCost = 0;
  if (this.size === "Kleine") {
    pizzaCost += 8;
  } else if (this.size === "Mittlere") {
    pizzaCost += 10;
  } else (this.size === "Grosse")
    pizzaCost += 12;

  return pizzaCost
}


var toppingsCost = function(selectToppings){
  return (selectToppings.length() * 1.5);
}

var totalCost = function(pizzaCost, toppingsCost){
  return ("$" + pizzaCost + toppingsCost)
}





$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var size = $("select#size").val();
    var result = pizza();

    $(".toppings").each(function() {
      var inputBratwurst = $(this).radio("input.bratwurst").val();
      var inputCurrywurst = $(this).radio("input.currywurst").val();
      var inputSauerbraten = $(this).radio("input.sauerbraten").val();
      var inputSauerkraut = $(this).radio("input.sauerkraut").val();
      var inputSpatzle = $(this).radio("input.spatzle").val();
      var inputSpeck = $(this).radio("input.speck").val();
      var inputKartoffel = $(this).radio("input.kartoffel").val();
      var inputRotkohl = $(this).radio("input.rotkohl").val();
      console.log(inputSpatzle);
    });

    var selectToppings = [inputBratwurst, inputCurrywurst, inputSauerbraten, inputSauerkraut, inputSpatzle, inputSpeck, inputKartoffel, inputRotkohl];


    console.log(selectToppings);

    $("#result").show();
    $(".size").text(pizza.size);
    $(".toppings").text(pizza.selectToppings);
    $(".price").text(pizza.totalCost);
  });
});
