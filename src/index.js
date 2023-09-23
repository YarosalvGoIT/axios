import "./styles/normalize.css";
import "./styles/index.css";

import productsApi from "./requests/products";
import usersApi from "./requests/users";
import postsApi from "./requests/posts";
import renderService from "./services/markupService";

// Завдання 1
const renderProducts = async () => {
  try {
    const products = await productsApi.getProducts();
    renderService.renderProductsMarkup(products);
  } catch (error) {
    alert(error);
  }
};

// renderProducts();

// Завдання 2
const form = document.getElementById("singleProductForm");
const productSection = document.getElementById("singleProduct");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  productSection.innerHTML = "";
  const id = e.target.elements.id.value;
  try {
    const product = await productsApi.getProductById(id);
    renderService.renderProductByIdMarkup(product, productSection);
  } catch (error) {
    alert(error);
  }
});

// productsApi.searchProductsByCategory('smartphones');
// productsApi.filterProducts(5, 10, ['title', 'price']);
// productsApi.getCategories();
// productsApi.getProductsByLastCategory();
// productsApi.addProduct();
// productsApi.updateProduct(10);
// productsApi.deleteProduct(1);

// usersApi.getUsers();
usersApi.getUserById(10);
// usersApi.getUsersByName('Med');
// usersApi.getCartsByUserId(1);
// usersApi.getPostsByUserId(1);
// usersApi.getTodosByUserId(1);
// usersApi.addUser();

// postsApi.getPosts();
// postsApi.getPostById(10);
// postsApi.getPostByContentKey('dreams');
// postsApi.getPostComments(5);
// postsApi.addPost();
// postsApi.updatePost(1);
// postsApi.deletePost(15);
const page = 1;

function handleSubmit(page = 1, query) {
  axios({
    params: {
      page,
      query,
    },
  });
}

function handleBtnSlick() {
  page += 1;
  axios.get(`test.com/page=${page}}`);
}
