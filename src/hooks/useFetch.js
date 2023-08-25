import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productservices";

export const useFetch = () => {
  const [products, setProducts] = useState([]);

  const fetchProductsData = async () => {
    const products = await fetchProducts();
    setProducts(products);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return { products };
};
