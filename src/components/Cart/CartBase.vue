<template>
  <div
    class="container empty-cart"
    v-if="getCartStatus == 'empty'"
    :style="toggleBlankCartStyle"
  >
    <img src="/src/assets/Icons/Cart.png" alt="img-cart" />
    <h4>سبد خرید شما خالی است</h4>
    <p>در فروشگاه میتوانید محصولات بیشتری به سبد خود اضافه کنید.</p>
    <router-link to="/shop">رفتن به فروشگاه</router-link>
  </div>
  <div
    class="container"
    v-if="getCartStatus == 'notEmpty'"
    :style="toggleBlankCartStyle"
  >
    <cart-item
      v-for="item in $store.getters.getCart.items"
      :key="item"
      :id="item.id"
      :product-title="item.title"
      :quantity="item.quantity"
      :img-source="item.imgSource"
    ></cart-item>
    <div class="container flex-start">
      <h4>قیمت کل: {{ getCartPrice }} تومان</h4>
    </div>
    <router-link @click="changeCartStatus" to="/cart">پرداخت</router-link>
  </div>
  <div class="container order-success" v-if="getCartStatus == 'payment'">
    <img src="/src/assets/Icons/OrderSuccess.png" alt="order-success" />
    <h4>پرداخت با موفقیت انجام شد</h4>
    <p>از خرید شما متشکریم.</p>
  </div>
</template>

<script>
import CartItem from "../UI/CartItem.vue";
export default {
  components: {
    CartItem,
  },
  data() {
    return {
      orderStatus: false,
    };
  },
  methods: {
    changeOrder() {
      this.orderStatus = true;
      this.$store.dispatch("emptyTheCart");
    },
    changeCartStatus() {
      this.$store.dispatch("changeCartStatus", { type: "payment" });
    },
  },
  computed: {
    toggleBlankCart() {
      if (this.$store.getters.getCart.items.length <= 0) {
        return true;
      } else {
        return false;
      }
    },
    toggleBlankCartStyle() {
      if (this.toggleBlankCart) {
        return { height: "90vh" };
      } else {
        return { "margin-top": "25px" };
      }
    },
    getCartStatus() {
      return this.$store.getters.getCart.status;
    },
    getCartPrice() {
      return this.$store.getters.getCart.total;
    },
  },
};
</script>
