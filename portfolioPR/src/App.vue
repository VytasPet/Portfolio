<template>
  <div class="mx-auto bg-black">
    <Header class="full mx-auto" />
    <Hero />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Hero from "./components/sections/Hero.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
  },
};
</script>

<style scoped></style>
