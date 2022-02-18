import { createStore } from "vuex";

const store = createStore({
  state: {
    products: [
      {
        id: 1,
        title: "نان باگت بسته 5 تایی",
        imgSource: "/src/assets/Baguette_1.jfif",
        price: 43000,
        type: "baguette",
        quantity: 1,
      },
      {
        id: 2,
        title: "نان باگت بسته 10 تایی",
        imgSource: "/src/assets/Baguette_1.jfif",
        type: "baguette",
        price: 86000,
        quantity: 1,
      },
      {
        id: 3,
        title: "نان تست بسته 5 تایی",
        imgSource: "/src/assets/Toast_1.jfif",
        type: "toast",
        price: 50000,
        quantity: 1,
      },
      {
        id: 4,
        title: "نان تست بسته 10 تایی",
        imgSource: "/src/assets/Toast_1.jfif",
        type: "toast",
        price: 100000,
        quantity: 1,
      },
    ],
    cart: {
      total: 0,
      items: [
        {
          id: 4,
          title: "نان تست بسته 10 تایی",
          imgSource: "/src/assets/Toast_1.jfif",
          type: "toast",
          price: 100000,
          quantity: 2,
        },
      ],
    },
  },
  getters: {
    getProductsList(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
    },
  },

  mutations: {
    addToCart(state, product) {
      console.log(state, product);
      let index = state.cart.items.findIndex((prod, i) => {
        if (prod.id == product.id) {
          state.cart.items[i].quantity++;
          return true;
        } else {
          state.cart.items.push(product);
          return false;
        }
      });
    },
  },
  actions: {
    addToCart(context, payload) {
      const prodIndexInCart = context.state.cart.items.findIndex((ci) => {
        !!(ci.id === payload.productId);
      });
      console.log(prodIndexInCart);
      if (prodIndexInCart < 0) {
        console.log("Not founded");
      } else {
        console.log("founded");
      }
    },
  },
});

export default store;
