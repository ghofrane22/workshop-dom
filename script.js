var btn_plus = document.querySelectorAll(".plus");
var btn_min = document.querySelectorAll(".min");
var price = document.querySelectorAll(".price");
var totalPrice = document.getElementById("totalprice");
var quantity = document.querySelectorAll(".quantity");
var icon = document.querySelectorAll(".icon");
var btn_delete = document.querySelectorAll(".delete");
for (let btn of btn_plus) {
  btn.addEventListener("click", function () {
    let parent = btn.parentElement;
    let quantity = parent.querySelector(".quantity");
    quantity.innerHTML++;
    totalPrice.innerHTML =
      +totalPrice.innerHTML + +parent.querySelector(".price").innerHTML;
    console.log(totalPrice);
  });
}
for (let btn of btn_min) {
  btn.addEventListener("click", function () {
    let parent = btn.parentElement;
    let quantity = parent.querySelector(".quantity");
    if (parseInt(quantity.innerHTML) > 0) {
      quantity.innerHTML--;
      totalPrice.innerHTML =
        +totalPrice.innerHTML - +parent.querySelector(".price").innerHTML;
    }
    console.log(totalPrice);
  });
}
icon.forEach(function (icon) {
  icon.addEventListener("click", function () {
    icon.classList.toggle("active");
  });
});

for (let btn of btn_delete) {
  btn.addEventListener("click", function () {
    let parent = btn.parentElement;
    let quantity = parent.querySelector(".quantity");
    let price = parent.querySelector(".price");
    totalPrice.innerHTML =
      +totalPrice.innerHTML - +quantity.innerHTML * +price.innerHTML;
    parent.remove();
  });
}
