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
      items: [
        {
          id: 4,
          title: "نان تست بسته 10 تایی",
          imgSource: "/src/assets/Toast_1.jfif",
          price: 100000,
          quantity: 1,
        },
        {
          id: 1,
          title: "نان باگت بسته 5 تایی",
          imgSource: "/src/assets/Baguette_1.jfif",
          price: 43000,
          quantity: 1,
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
    addToCart(state, payload) {
      const findedProdIndex = state.cart.items.findIndex((prod) => {
        return prod.id === payload.productId;
      });
      if (findedProdIndex < 0) {
        const newProd = {
          id: payload.productId,
          title: payload.productTitle,
          imgSource: payload.imgSource,
          price: payload.price,
          quantity: 1,
        };
        state.cart.items.push(newProd);
      } else {
        state.cart.items[findedProdIndex].quantity += 1;
      }
    },
  },
  actions: {
    addToCart(context, payload) {
      context.commit("addToCart", payload);
    },
  },
});

export default store;
