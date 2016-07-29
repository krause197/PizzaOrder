function pizza(size, selectToppings) {
  this.size = size;
  this.selectToppings = selectToppings;
}

pizza.prototype.price = function() {
  var pizzaCost = 0;
  if (this.size === "Kleine") {
    pizzaCost += 8;
  } else if (this.size === "Mittlere") {
    pizzaCost += 10;
  } else {
    pizzaCost += 12;
  }


  pizzaCost += (this.selectToppings.length * 1.5);

  return ("$" + pizzaCost.toFixed(2));
}





$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var size = $("select#size").val();
    var selectToppings = []
    $(":checkbox:checked").each(function(toppings) {
      selectToppings[toppings] = $(this).val();
      });
    var newPizza = new pizza(size, selectToppings);

    $("#result").show();
    $("span.size").text(newPizza.size);
    $("span.toppings").text(newPizza.selectToppings);
    $("span.price").text(newPizza.price());
  });
});
