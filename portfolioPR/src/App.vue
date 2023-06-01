<template>
  <div class="mx-auto bg-black">
    <Header class="full mx-auto" />
    <Hero />
    <Projects />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Hero from "./components/sections/Hero.vue";
import Projects from "./components/sections/Projects.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Projects,
  },
};
</script>

<style scoped></style>
