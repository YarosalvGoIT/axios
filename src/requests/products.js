import apiInstance from "../services/api.js";

// PRODUCTS

const getProducts = async () => {
  try {
    const res = await apiInstance.get("/products");
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getProductById = async (id) => {
  try {
    const res = await apiInstance.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getCategories = async () => {
  const res = await apiInstance.get("/products/categories");
  console.log(res.data);
  return res.data;
};

const searchProductsByCategory = async (category) => {
  const res = await apiInstance.get(`/products/category/${category}`);
  console.log(res.data);
};

const filterProducts = async (limit, skip, props = []) => {
  const res = await apiInstance.get(
    `/products?limit=${limit}&skip=${skip}&select=${props.join(",")}`
  );
  console.log(res.data);
};

const getProductsByLastCategory = async () => {
  const categories = await getCategories();
  await searchProductsByCategory(categories[categories.length - 1]);
};

const addProduct = async () => {
  const newProduct = {
    title: "BMW X7",
    price: 50000,
  };

  const res = await apiInstance.post("/products/add", newProduct);
  console.log(res.data);
};

const updateProduct = async (id) => {
  const updatedInfo = {
    title: "Raspberry Pi",
    price: 2000,
  };

  const res = await apiInstance.put(`/products/${id}`, updatedInfo);
  console.log(res.data);
};

const deleteProduct = async (id) => {
  const res = await apiInstance.delete(`/products/${id}`);
  console.log(res.data);
};

export default {
  getProducts,
  getProductById,
  searchProductsByCategory,
  filterProducts,
  getCategories,
  getProductsByLastCategory,
  addProduct,
  updateProduct,
  deleteProduct,
};
