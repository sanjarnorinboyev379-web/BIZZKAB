let count = 0;
let total = 0;
let list = [];

function add(btn) {
  const card = btn.parentElement;
  const name = card.dataset.name;
  const price = Number(card.dataset.price);

  count++;
  total += price;

  list.push(name + " - " + price + " so'm");

  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = total;

  render();
}

function render() {
  const ul = document.getElementById("items");
  ul.innerHTML = "";
  list.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });
}

function order() {
  if (list.length === 0) {
    alert("Savatcha bo‘sh!");
    return;
  }

  let text = "🧾 BIZZKAB BUYURTMA\n\n";
  list.forEach(i => text += "• " + i + "\n");
  text += "\nJami: " + total + " so'm";

  window.open(
    "https://t.me/share/url?text=" + encodeURIComponent(text)
  );
}

document.getElementById("search").addEventListener("keyup", e => {
  let v = e.target.value.toLowerCase();
  document.querySelectorAll(".card").forEach(c => {
    c.style.display = c.innerText.toLowerCase().includes(v)
      ? "block" : "none";
  });
});
let count = 0;
let total = 0;
let list = [];
let orderId = Math.floor(1000 + Math.random() * 9000);

function add(btn) {
  const card = btn.parentElement;
  const name = card.dataset.name;
  const price = Number(card.dataset.price);

  list.push(name + " — " + price + " so'm");
  count++;
  total += price;

  document.getElementById("count").innerText = count;
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

function order() {
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  if (!phone || !address) {
    alert("Telefon va manzilni to‘ldiring!");
    return;
  }

  let ok = confirm(
    "Buyurtma #" + orderId +
    "\nJami: " + total + " so'm\n\nTasdiqlaysizmi?"
  );

  if (!ok) return;

  let text =
📦 YANGI BUYURTMA #${orderId}

📞 Tel: ${phone}
📍 Manzil: ${address}

🍔 Buyurtma:
${list.join("\n")}

💰 Jami: ${total} so'm
;

  // ADMIN BOTGA YUBORISH
  window.open(
    "https://t.me/share/url?text=" +
    encodeURIComponent(text)
  );
}
