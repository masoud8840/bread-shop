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
      },
      {
        id: 2,
        title: "نان باگت بسته 10 تایی",
        imgSource: "/src/assets/Baguette_1.jfif",
        type: "baguette",
        price: 86000,
      },
      {
        id: 3,
        title: "نان تست بسته 5 تایی",
        imgSource: "/src/assets/Toast_1.jfif",
        type: "toast",
        price: 50000,
      },
      {
        id: 4,
        title: "نان تست بسته 10 تایی",
        imgSource: "/src/assets/Toast_1.jfif",
        type: "toast",
        price: 100000,
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
});

export default store;
