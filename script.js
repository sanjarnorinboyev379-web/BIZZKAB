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
