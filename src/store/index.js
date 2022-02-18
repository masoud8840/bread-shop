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
      items: [],
      total: 0,
      status: "empty",
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
        state.cart.total += payload.price;
        state.cart.status = "notEmpty";
      } else {
        state.cart.items[findedProdIndex].quantity += 1;
        state.cart.total +=
          state.cart.items[findedProdIndex].quantity *
          state.cart.items[findedProdIndex].price;
      }
    },
    removeFromCart(state, payload) {
      state.cart.items = state.cart.items.filter((item) => {
        return item.id != payload.productId;
      });
    },
    emptyTheCart(state) {
      state.cart.items = [];
    },

    setCartTo(state, payload) {
      state.cart.status = payload.type;
    },
  },
  actions: {
    addToCart(context, payload) {
      context.commit("addToCart", payload);
      context.commit("setCartTo", { type: "notEmpty" });
    },
    removeFromCart(context, payload) {
      context.commit("removeFromCart", payload);
      if (context.getters.getCart.items.length <= 0) {
        context.commit("setCartTo", { type: "empty" });
      }
    },
    emptyTheCart(context) {
      context.commit("emptyTheCart");
    },
    changeCartStatus(context, payload) {
      if (payload.type == "empty") {
        context.commit("emptyTheCart");
      } else if (context.getters.getCart.items.length < 0) {
        context.commit("setCartTo", { type: "notEmpty" });
      } else if (payload.type == "payment") {
        context.commit("setCartTo", payload);
        setTimeout(function () {
          context.commit("setCartTo", { type: "empty" });
        }, 2000);
      }
    },
  },
});

export default store;
