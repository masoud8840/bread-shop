<template>
  <div class="container">
    <div class="products-filter">
      <form class="filter-form">
        <h4 class="section-title">فیلتر براساس:</h4>
        <div class="input-group">
          <label for="name">نام نان: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div class="input-group">
          <label for="type">نوع نان: </label>
          <select name="type" id="type">
            <option value="default">---</option>
            <option value="baguette">باگت</option>
            <option value="toast">تست</option>
          </select>
        </div>
        <div class="input-group">
          <label for="price"
            >قیمت تا: <span>{{ price }}</span> تومان</label
          >
          <input
            type="range"
            name="price"
            id="price"
            max="500000"
            min="0"
            value="300000"
            step="25000"
            v-model="price"
          />
        </div>
      </form>
    </div>
    <div class="products-list">
      <product-item></product-item>
    </div>
  </div>
</template>

<script>
import ProductItem from "../UI/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      price: 500000,
    };
  },
};
</script>
