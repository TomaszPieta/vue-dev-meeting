import axios from 'axios';

const store = {
  state: {
    products: []
  },
  async fetchProducts() {
    this.state.products = await axios.get('todos.json').then(res => res.data);
  },
  addProduct(product) {
    this.state.products.push(product);
  }
};

export default store;
