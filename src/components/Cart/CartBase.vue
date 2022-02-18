<template>
  <div
    class="container"
    v-if="toggleBlankCart && orderStatus"
    :style="toggleBlankCartStyle"
  >
    <img src="/src/assets/Icons/Cart.png" alt="img-cart" />
    <h4>سبد خرید شما خالی است</h4>
    <p>در فروشگاه میتوانید محصولات بیشتری به سبد خود اضافه کنید.</p>
    <router-link to="/shop">رفتن به فروشگاه</router-link>
  </div>

  <!-- v-if="!toggleBlankCart"  -->
  <div
    class="container"
    v-if="!toggleBlankCart && !orderStatus"
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
    <router-link @click="changeOrder" to="/cart">پرداخت</router-link>
  </div>
  <div class="container order-success" v-if="orderStatus">
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
  },
};
</script>
