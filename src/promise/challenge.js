import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  return fetch(urlApi);
};


fetchData(`${API}/products?offset=0&limit=2`)
  .then(response => response.json())
  .then(products => {
    console.log("PRODUCTOS: ",products)
    return fetchData(`${API}/products/${products[1].id}`)
  })
  .then(response => response.json())
  
  .then(product => {
    console.log('--------------------------')
    console.log("PRODUCTO ELEGIDO CON ID: ", product);
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);
  })
  .catch(err => console.log(err))
  .finally(() => console.log('Finally'));