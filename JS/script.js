let price;
let crust_price;
let topping_price;
let total = 0;
// let checkoutTotal;

function GetPizza(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

$("button#continue").click(function (event) {
  event.preventDefault();
  let pName = $("#type option:selected").val();
  let pSize = $("#size option:selected").val();
  let pCrust = $("#crust option:selected").val();
  let pTopping = [];

  $.each($("input[name='toppings']:checked"), function () {
    pTopping.push($(this).val());
  });

  switch (pSize) {
    case "0":
      price = 0;
      break;
    case "Large":
      price = 1000;
      break;
    case "Medium":
      price = 800;
      break;
    case "Small":
      price = 600;
      break;
    default:
      console.log("Select size");
  }
  // alert(pSize)
  switch (pCrust) {
    case "0":
      c_price = 0;
      break;
    case "Regular":
      c_price = 100;
      break;
    case "Crispy":
      c_price = 150;
      break;
    case "Gluten-free":
      c_price = 200;
      break;
    case "Stuffed":
      c_price = 250;
      break;
    default:
      alert("crust");
  }
  let topping_value = pTopping.length * 70;

  if (pSize == "0" && pCrust == "0") {
    $("button#continue").show();
    $("div#choice").hide();
    alert("Please select the Pizza size and crust");
  } else {
    $("button#continue").hide();
    $("div#choice").slideDown(1200);
  }

  total = price + c_price + topping_value;
  let checkoutTotal = 0;
  checkoutTotal = checkoutTotal + total;
  //  alert(checkoutTotal);

  $("#pizzatype").html($("#type option:selected").val());
  $("#pizzasize").html($("#size option:selected").val());
  $("#pizzacrust").html($("#crust option:selected").val());
  $("#pizzatopping").html(pTopping.join(", "));
  $("#totals").html(checkoutTotal);
});

// add button
$("button#add").click(function () {
  let pName = $("#type option:selected").val();
  let pSize = $("#size option:selected").val();
  let pCrust = $("#crust option:selected").val();
  let pTopping = [];

  $.each($("input[name='toppings']:checked"), function () {
    pTopping.push($(this).val());
  });
  switch (pSize) {
    case "0":
      price = 0;
      break;
    case "Large":
      price = 1000;
      break;
    case "Medium":
      price = 800;
      break;
    case "Small":
      price = 600;
      break;
    default:
      console.log("error");
  }
  // alert(pSize)
  switch (pCrust) {
    case "0":
      c_price = 0;
      break;
    case "Regular":
      c_price = 100;
      break;
    case "Crispy":
      c_price = 150;
      break;
    case "Gluten-free":
      c_price = 200;
      break;
    case "Stuffed":
      c_price = 250;
      break;
    default:
      alert("error");
  }

  let topping_value = pTopping.length * 70;

  total = price + c_price + topping_value;

  checkoutTotal = 0;
  checkoutTotal = checkoutTotal + total;

  newOrder = new GetPizza(pName, pSize, pCrust, pTopping, total);
  $("#inputorder").append(
    `<tr><td id="pizzatype">` +
      newOrder.name +
      `</td><td id="pizzasize"> ` +
      newOrder.size +
      `</td><td id="pizzacrust"> ` +
      newOrder.crust +
      `</td><td id="pizzatopping"> ` +
      newOrder.topping +
      `</td><td id="totals"> ` +
      newOrder.total +
      `</td></tr>`
  );
});

$("button#complete").click(function () {
  let pName = $("#type option:selected").val();
  let pSize = $("#size option:selected").val();
  let pCrust = $("#crust option:selected").val();
  let pTopping = [];

  $.each($("input[name='toppings']:checked"), function () {
    pTopping.push($(this).val());
  });
  switch (pSize) {
    case "0":
      price = 0;
      break;
    case "Large":
      price = 1000;
      break;
    case "Medium":
      price = 800;
      break;
    case "Small":
      price = 600;
      break;
    default:
      console.log("error");
  }
  switch (pCrust) {
    case "0":
      c_price = 0;
      break;
    case "Regular":
      c_price = 100;
      break;
    case "Crispy":
      c_price = 150;
      break;
    case "Gluten-free":
      c_price = 200;
      break;
    case "Stuffed":
      c_price = 250;
      break;
    default:
      alert("error");
  }

  let topping_value = pTopping.length * 70;
  total = price + c_price + topping_value;

  // checkoutTotal = 0;

  checkoutTotal = checkoutTotal + total;
  let deliveryAmount = checkoutTotal + 200;
  $("#totalamount").append("Your bill plus delivery fee is: " + deliveryAmount);
  // alert(total);

  $("button#complete").hide();
  $("button#add").hide();
  $("button#deliver").slideDown(1000);
  $("#pizzatotal").append("Your bill is ksh. " + checkoutTotal);
});

$("button#deliver").click(function () {
  $("form#userform").show();
});

$("button#final-order").click(function (event) {
  event.preventDefault();
  let person = $("input#name").val();
  let phone = $("input#num").val();
  let location = $("input#location").val();
  // alert(person)
  alert(
    person + " We have received your order.It will be delivered at " + location
  );
});
