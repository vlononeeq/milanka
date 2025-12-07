const api_p = "https://my-json-server.typicode.com/vlononeeq/milanka/products";

fetch(api_p)
  .then(response => response.json())
  .then(data => {
    console.log("Продукты:", data);
  });


const api_u = "https://my-json-server.typicode.com/vlononeeq/milanka/users";

fetch(api_u)
  .then(response => response.json())
  .then(data => {
    console.log("Пользователи:", data);
  });
