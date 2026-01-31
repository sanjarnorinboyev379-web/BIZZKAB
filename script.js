let count = 0;
let total = 0;
let text = "";

function add(name, price){
  count++;
  total += price;
  text += name + " - " + price + " so‘m\n";

  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = total;
}

function order(){
  if(count === 0){
    alert("Avval mahsulot tanlang!");
    return;
  }

  let msg = "BIZZKAB buyurtma:\n\n" + text + "\nJami: " + total + " so‘m";
  let phone = "998770050122";

  window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(msg));
}
