<template>
  <div class="mx-auto bg-black">
    <Header @sectionOpen="scrollToSection" @contactOpen="openContact" />
    <Hero @sectionOpen="scrollToSection" @contactOpen="openContact" />
    <Projects ref="projects" />
    <Tech ref="tech" />
    <Footer ref="Footer" />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Hero from "./components/sections/Hero.vue";
import Projects from "./components/sections/Projects.vue";
import Tech from "./components/sections/Tech.vue";
import Footer from "./components/layout/Footer.vue";
import { provide, ref } from "vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    Projects,
    Tech,
    Footer,
  },
  methods: {
    scrollToSection(section) {
      this.$nextTick(() => {
        const element = this.$refs[section].$el;
        const top = element.offsetTop;

        window.scrollTo({ top, behavior: "smooth" });
      });
    },
    openContact() {
      this.$nextTick(() => {
        const element = this.$refs["Footer"].$el;
        const top = element.offsetTop;

        window.scrollTo({ top, behavior: "smooth" });
      });
    },
  },
  setup() {
    const menuVisible = ref(false);

    provide("menuVisible", menuVisible);

    return { menuVisible };
  },
};
</script>

<style scoped></style>
