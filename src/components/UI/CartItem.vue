<template>
  <div class="cart-item">
    <img :src="imgSource" alt="prod-img" />
    <div class="product-discription">
      <h4>{{ productTitle }}</h4>
      <p>{{ productDiscription }}</p>
      <div class="qty">
        <span>تعداد: </span>
        <input type="number" name="qty" v-model="qty" />
      </div>
    </div>
    <i class="fa-solid fa-xmark"></i>
  </div>
</template>

<script>
export default {
  props: ["id", "imgSource", "productTitle", "productDiscription", "quantity"],
  data() {
    return {
      qty: this.quantity,
    };
  },
  watch: {
    qty() {
      if (this.qty <= 0) {
        this.qty = 0;
      }
    },
  },
};
</script>
