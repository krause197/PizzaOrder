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

  var toppingsCost = function(selectToppings){
    return (selectToppings.length() * 1.5);
  }

  var totalCost = function(pizzaCost, toppingsCost){
    return ("$" + pizzaCost + toppingsCost)
  }
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

    console.log(selectToppings);
    console.log(pizzaCost);
    console.log(toppingsCost);
    console.log(totalCost);
    $("#result").show();
    $(".size").text(newpizza.size);
    $(".toppings").text(newpizza.selectToppings);
    $(".price").text(newpizza.totalCost);
  });
});
