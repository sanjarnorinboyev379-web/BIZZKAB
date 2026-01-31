let list = [];
let total = 0;
let orderId = Math.floor(1000 + Math.random() * 9000);

function add(btn) {
  const card = btn.parentElement;
  const name = card.dataset.name;
  const price = Number(card.dataset.price);

  list.push(name + " — " + price + " so'm");
  total += price;

  document.getElementById("total").innerText = total;
  render();
}

function render() {
  const ul = document.getElementById("items");
  ul.innerHTML = "";
  list.forEach(i => {
    let li = document.createElement("li");
    li.innerText = i;
    ul.appendChild(li);
  });
}

function showForm() {
  if (list.length === 0) {
    alert("Savatcha bo‘sh!");
    return;
  }
  document.getElementById("form").style.display = "block";
}

function sendOrder() {
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  if (!phone || !address) {
    alert("Telefon va manzilni to‘liq kiriting!");
    return;
  }

  let text =
📦 BUYURTMA #${orderId}

📞 Tel: ${phone}
📍 Manzil:
${address}

🍔 Buyurtma:
${list.join("\n")}

💰 Jami: ${total} so'm
;

  window.open(
    "https://t.me/share/url?text=" +
    encodeURIComponent(text)
  );
}
