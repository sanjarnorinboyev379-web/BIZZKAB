let count = 0;
let total = 0;

function add(btn) {
    let card = btn.parentElement;
    let name = card.dataset.name;
    let price = Number(card.dataset.price);

    count++;
    total += price;

    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = total;

    let li = document.createElement("li");
    li.innerText = name + " - " + price + " so'm";

    document.getElementById("items").appendChild(li);
}

const search = document.getElementById("search");

search.addEventListener("keyup", function () {
    let value = search.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
        card.style.display =
            card.innerText.toLowerCase().includes(value)
                ? "block"
                : "none";
    });
});
