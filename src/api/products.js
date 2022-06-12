import client from "./client";

const productBaseURL = "/api";

export const getProducts = () => {
  const url = `${productBaseURL}/products`;
  return client.get(url);
};
