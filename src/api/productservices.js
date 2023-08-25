const url = "https://fakestoreapi.com/products?limit=10";

export const fetchProducts = async() => {
  const response = await fetch(url);
  return response.json();
}
