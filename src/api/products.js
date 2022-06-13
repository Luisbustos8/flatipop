import client from "./client";

const productBaseURL = "/api/products";

export const getProducts = () => {
  return client.get(productBaseURL);
};

export const publishProduct = (productData) => {
  return client.post(productBaseURL, productData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
