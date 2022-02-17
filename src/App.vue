<template>
  <nav id="navigation">
    <div class="container">
      <ul>
        <li>
          <router-link to="/">صفحه اصلی</router-link>
        </li>
        <li>
          <router-link to="/contact">تماس با ما</router-link>
        </li>
      </ul>
      <div class="dropdown">
        <button class="drop-down-btn">حساب کاربری</button>
        <ul class="drop-down-menu">
          <i class="fa-solid fa-sort-up arrow-up"></i>
          <li>
            <router-link to="/"><i class="fa-solid fa-user-plus"></i> ثبت نام</router-link>
          </li>
          <li>
            <router-link to="/"><i class="fa-solid fa-door-open"></i> ورود</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
