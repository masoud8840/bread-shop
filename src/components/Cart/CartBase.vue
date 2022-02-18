<template>
  <div class="container" v-if="false">
    <img src="/src/assets/Icons/Cart.png" alt="img-cart" />
    <h4>سبد خرید شما خالی است</h4>
    <p>در فروشگاه میتوانید محصولات بیشتری به سبد خود اضافه کنید.</p>
    <router-link to="/shop">رفتن به فروشگاه</router-link>
  </div>

  <div class="container">
    <div class="cart-item">
      <img src="/src/assets/Icons/Cart.png" alt="" />
      <div class="product-discription">
        <h4>عنوان محصول</h4>
        <p>توضیحات محصول</p>
        <div class="qty">
          <span>تعداد: </span>
          <input type="number" name="qty" v-model="qty" />
        </div>
      </div>
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["count"],
  data() {
    return {
      qty: this.count,
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
