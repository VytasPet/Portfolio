<template>
  <div class="mx-auto bg-black">
    <Header class="full mx-auto" />
    <Hero />
    <Projects />
    <Tech />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Hero from "./components/sections/Hero.vue";
import Projects from "./components/sections/Projects.vue";
import Tech from "./components/sections/Tech.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Projects,
    Tech,
  },
};
</script>

<style scoped></style>
