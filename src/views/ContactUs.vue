<template>
  <section class="contactus">
    <contactus-header></contactus-header>
    <contactus-body></contactus-body>
    <contactus-footer></contactus-footer>
  </section>
</template>

<script>
import ContactusHeader from "../components/ContactUs/ContactusHeader.vue";
import ContactusBody from "../components/ContactUs/ContactusBody.vue";
import ContactusFooter from "../components/ContactUs/ContactusFooter.vue";

export default {
  name: "ContactUs",
  components: {
    ContactusHeader,
    ContactusBody,
    ContactusFooter,
  },
};
</script>

<style scoped></style>
