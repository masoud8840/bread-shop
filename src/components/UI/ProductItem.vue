<template>
  <div class="container">
    <img :src="imgSource" alt="prod-img" />
    <h4>{{ productTitle }}</h4>
    <span>{{ price }}</span>
    <button @click="addToCart">سفارش</button>
  </div>
</template>

<script>
export default {
  props: ["productId", "imgSource", "productTitle", "type", "price"],
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", { productId: this.productId });
    },
  },
};
</script>
