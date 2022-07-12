import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

const anotherFunction = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products?offset=0&limit=2`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(
      `${urlApi}/categories/${product.category.id}`
    );

    console.log("Productos: ", products);
    console.log("Producto: ", product);
    setTimeout(() => console.log("Categoria del producto: ", category), 2000);

  } catch (error) {
    console.log(error);
  }
};
anotherFunction(API);