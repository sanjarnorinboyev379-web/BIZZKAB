function plus(btn) {
  const item = btn.closest(".item");
  const span = item.querySelector("span");

  let count = parseInt(span.innerText);
  count++;
  span.innerText = count;

  updateCart();
}

function minus(btn) {
  const item = btn.closest(".item");
  const span = item.querySelector("span");

  let count = parseInt(span.innerText);
  if (count > 0) {
    count--;
    span.innerText = count;
    updateCart();
  }
}

function updateCart() {
  let totalCount = 0;
  let totalPrice = 0;

  document.querySelectorAll(".item").forEach(item => {
    const price = parseInt(item.dataset.price);
    const count = parseInt(item.querySelector("span").innerText);

    totalCount += count;
    totalPrice += count * price;
  });

  document.getElementById("count").innerText = totalCount;
  document.getElementById("total").innerText = totalPrice;
}

function order() {
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  const totalCount = parseInt(document.getElementById("count").innerText);
  const totalPrice = parseInt(document.getElementById("total").innerText);

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
  // 🔴 BU YERGA YANGI, TO‘LIQ TOKENINGNI QO‘Y (masalan: "123456789:ABCDEF...")
  const BOT_TOKEN = "AAHD-kctgyct9CvgsnFDawcR0S9y9teXLXg";
  const CHAT_ID = "8331617188";

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  fetch(url, {
    method: "POST",
    mode: "no-cors", // 👈 brauzer CORS bloklamasligi uchun (test uchun)
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  });

  // no-cors da javobni o‘qib bo‘lmaydi, shuning uchun shunchaki muvaffaqiyat deb ko‘rsatamiz
  alert("Buyurtma yuborildi ✅ (token/chat_id to‘g‘ri bo‘lsa, Telegramga boradi)");
}

  



