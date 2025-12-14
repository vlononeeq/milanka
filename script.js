// const apiProducts = "https://my-json-server.typicode.com/vlononeeq/milanka/products";
// const apiUsers = "https://my-json-server.typicode.com/vlononeeq/milanka/users";

// fetch(apiProducts)
//   .then(res => res.json())
//   .then(data => console.log("Продукты:", data));

// fetch(apiUsers)
//   .then(res => res.json())
//   .then(data => console.log("Пользователи:", data));
const images = [
  "https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJztyKF0hFLHS8RKoYLnffLMQ1yJrri9tmw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3Hp8z54nzw2jkJW2OgdH8E8_WFXzLHg2ow&s"
];

fetch("https://my-json-server.typicode.com/vlononeeq/milanka/products")
  .then(res => res.json())
  .then(products => {
    const box = document.getElementById("products");

    products.forEach((p, index) => {
      box.innerHTML += `
        <div class="card">
          <img src="${images[index % images.length]}" alt="${p.title}">
          <div class="card-body">
            <h2 class="card-title">${p.title}</h2>
            <p class="card-price">${p.price}$</p>
            <p class="card-desc">${p.description}</p>
            <button class="buy-btn">Buy</button>
          </div>
        </div>
      `;
    });
  })
  .catch(err => {
    console.error("Ошибка загрузки товаров:", err);
  });



  