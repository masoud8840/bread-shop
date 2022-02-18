<template>
  <div class="container">
    <ul>
      <li>
        <router-link to="/" class="main-link">صفحه اصلی</router-link>
      </li>
      <li>
        <router-link to="/contact" class="main-link">تماس با ما</router-link>
      </li>
    </ul>
    <div class="dropdown">
      <button class="drop-down-btn">حساب کاربری</button>
      <ul class="drop-down-menu">
        <div class="arrow-up"></div>
        <li>
          <router-link to="/"
            ><i class="fa-solid fa-user-plus"></i> ثبت نام</router-link
          >
        </li>
        <li>
          <router-link to="/"
            ><i class="fa-solid fa-door-open"></i> ورود</router-link
          >
        </li>
        <hr />
        <li>
          <router-link to="/cart"
            ><i class="fa-solid fa-cart-shopping"></i> سبد خرید
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
