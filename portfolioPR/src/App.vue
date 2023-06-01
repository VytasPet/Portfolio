<template>
  <div class="mx-auto bg-black">
    <Header class="full mx-auto" />
    <Hero />
    <Projects />
    <Tech />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Hero from "./components/sections/Hero.vue";
import Projects from "./components/sections/Projects.vue";
import Tech from "./components/sections/Tech.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Projects,
    Tech,
    Footer,
  },
};
</script>

<style scoped></style>
