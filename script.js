let total = 0;
let items = {};

function plus(btn){
  let item = btn.closest(".item");
  let name = item.dataset.name;
  let price = Number(item.dataset.price);
  let span = btn.parentElement.querySelector("span");

  span.innerText = Number(span.innerText) + 1;

  if(!items[name]) items[name] = {qty:0, price:price};
  items[name].qty++;

  calc();
}

function minus(btn){
  let item = btn.closest(".item");
  let name = item.dataset.name;
  let price = Number(item.dataset.price);
  let span = btn.parentElement.querySelector("span");

  if(Number(span.innerText) === 0) return;

  span.innerText = Number(span.innerText) - 1;
  items[name].qty--;

  if(items[name].qty <= 0) delete items[name];

  calc();
}

function calc(){
  let count = 0;
  total = 0;

  for(let k in items){
    count += items[k].qty;
    total += items[k].qty * items[k].price;
  }

  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = total;
}

function order(){
  if(total === 0){
    alert("Avval mahsulot tanlang!");
    return;
  }

  let msg = "🍔 BIZZKAB BUYURTMA\n\n";

  for(let k in items){
    msg += ${k} x${items[k].qty} = ${items[k].qty * items[k].price} so‘m\n;
  }

  msg += \nJAMI: ${total} so‘m;

  let phone = "998770050122";

  window.open(
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg)
  );
}
