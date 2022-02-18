<template>
  <div class="container">
    <img :src="imgSource" alt="prod-img" />
    <h4>{{ productTitle }}</h4>
    <span>{{ price }}</span>
    <button>سفارش</button>
  </div>
</template>

<script>
export default {
  props: ["productId", "imgSource", "productTitle", "type", "price"],
};
</script>
