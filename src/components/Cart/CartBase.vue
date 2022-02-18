<template>
  <div class="container" v-if="toggleBlankCart" :style="toggleBlankCartStyle">
    <img src="/src/assets/Icons/Cart.png" alt="img-cart" />
    <h4>سبد خرید شما خالی است</h4>
    <p>در فروشگاه میتوانید محصولات بیشتری به سبد خود اضافه کنید.</p>
    <router-link to="/shop">رفتن به فروشگاه</router-link>
  </div>

  <div class="container" v-if="!toggleBlankCart" :style="toggleBlankCartStyle">
    <cart-item
      v-for="item in $store.getters.getCart.items"
      :key="item"
      :id="item.id"
      :product-title="item.title"
      :quantity="item.quantity"
      :img-source="item.imgSource"
    ></cart-item>
  </div>
</template>

<script>
import CartItem from "../UI/CartItem.vue";
export default {
  components: {
    CartItem,
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
