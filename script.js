let totalCount = 0;
let totalPrice = 0;

function plus(btn) {
  const item = btn.closest(".item");
  const price = parseInt(item.dataset.price);
  const span = item.querySelector("span");

  let count = parseInt(span.innerText);
  count++;
  span.innerText = count;

  totalCount++;
  totalPrice += price;

  updateCart();
}

function minus(btn) {
  const item = btn.closest(".item");
  const price = parseInt(item.dataset.price);
  const span = item.querySelector("span");

  let count = parseInt(span.innerText);
  if (count > 0) {
    count--;
    span.innerText = count;

    totalCount--;
    totalPrice -= price;

    updateCart();
  }
}

function updateCart() {
  document.getElementById("count").innerText = totalCount;
  document.getElementById("total").innerText = totalPrice;
}

function order() {
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  if (totalCount === 0) {
    alert("Avval buyurtma tanlang!");
    return;
  }

  if (!phone || !address) {
    alert("Telefon va manzilni kiriting!");
    return;
  }

  let text = "🛒 Yangi buyurtma:\n\n";

  document.querySelectorAll(".item").forEach(item => {
    const name = item.dataset.name;
    const count = parseInt(item.querySelector("span").innerText);
    const price = parseInt(item.dataset.price);

    if (count > 0) {
      text += `• ${name} x${count} = ${count * price} so‘m\n`;
    }
  });

  text += `\n📞 Telefon: ${phone}`;
  text += `\n📍 Manzil: ${address}`;
  text += `\n\n💰 Jami: ${totalPrice} so‘m`;

  sendToTelegram(text);
}

function sendToTelegram(message) {
  const BOT_TOKEN = "SENING_BOT_TOKENING";
  const CHAT_ID = "SENING_CHAT_IDING";

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  })
  .then(() => {
    alert("Buyurtma yuborildi ✅");
  })
  .catch(() => {
    alert("Xatolik! Telegramga yuborilmadi ❌");
  });
}