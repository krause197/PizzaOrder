function pizza(size, selectToppings) {
  this.size = size;
  this.selectToppings = toppings;
  this.totalCost;
}

pizza.prototype.price = function() {
  var pizzaCost = 0;
  if (this.size === "Kleine") {
    pizzaCost += 8;
  } else if (this.size === "Mittlere"){
    pizzaCost += 10;
  } else (this.size === "Grosse"){
    pizzaCost += 12;
  }
  return pizzaCost
}
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

    $("#toppings").each(function() {
      var inputBratwurst = $(this).find("input.bratwurst").val();
      var inputCurrywurst = $(this).find("input.currywurst").val();
      var inputSauerbraten = $(this).find("input.sauerbraten").val();
      var inputSauerkraut = $(this).find("input.sauerkraut").val();
      var inputSpatzle = $(this).find("input.spatzle").val();
      var inputSpeck = $(this).find("input.speck").val();
      var inputKartoffel = $(this).find("input.kartoffel").val();
      var inputRotkohl = $(this).find("input.rotkohl").val();
      var selectToppings = [inputBratwurst, inputCurrywurst, inputSauerbraten, inputSauerkraut, inputSpatzle, inputSpeck, inputKartoffel, inputRotkohl];
    })

    $(".returnArray").text(result);
    $("#result").show();
    $(".size").text(pizza.size);
    $(".toppings").text(pizza.seclectToppings);
    $(".price").text(pizza.totalCost);
  });
});
