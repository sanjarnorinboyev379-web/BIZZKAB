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
  const BOT_TOKEN = "8331617188:AAHU6NflvTX5JyMtgbahKUGBCP1DLBM3fH4"; // bu yerga tokeningni qo'y
  const CHAT_ID = "8331617188"; // bu yerga o'zingning chat id

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.ok) {
        alert("Buyurtma yuborildi ✅");
      } else {
        alert("Telegram xato: " + JSON.stringify(data));
      }
    })
    .catch(err => {
      console.error(err);
      alert("Xatolik! So‘rov yuborilmadi ❌");
    });
}
