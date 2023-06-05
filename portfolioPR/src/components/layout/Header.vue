<template>
  <header class="full relative py-[40px] bg-black max-[500px]:px-[35px] max-[500px]:py-[40px]">
    <div class="flex justify-between">
      <h2 class="font-serif text-[28px] font-bold text-white">&lt;edu.&gt;</h2>
      <img
        :class="{ outline: menuVisible, 'outline-white': menuVisible }"
        class="min-[600px]:hidden cursor-pointer px-2 rounded-[6px] hover:outline hover:outline-white"
        :src="menu"
        alt=""
        @click="openMenu"
      />
      <nav class="flex min-[950px]:text-[22px] min-[500px]:text-[15px] items-center gap-[60px] min-[500px]:gap-[30px] font-serif text-white max-[600px]:hidden">
        <a @click="sectionOpen('home')" :class="{ 'border-b': menuActive === 'home' }" href="#">Home</a>
        <a @click="sectionOpen('projects')" :class="{ 'border-b': menuActive === 'projects' }" href="#">Projects</a>
        <a @click="sectionOpen('tech')" :class="{ 'border-b': menuActive === 'tech' }" href="#">Tech</a>
        <a class="border border-white p-[5px] rounded-[5px]" href="#">Contact</a>
      </nav>
      <nav v-if="menuVisible" class="absolute bg-black left-[50%] translate-x-[-50%] top-[40vh] translate-y-[-20vh] w-4/5 text-white min-[600px]:hidden z-20">
        <div class="flex justify-end p-5">
          <img class="cursor-pointer" :src="exit" alt="" @click="closeMenu" />
        </div>
        <div class="flex flex-col pt-[40px] pb-[80px] justify-center items-center gap-[30px]">
          <a class="border-b" href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Tech</a>
          <a class="border border-white p-[5px] rounded-[5px]" href="#">Contact</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import menu from "@/assets/images/mobmenu.svg"; // Adjust this path according to your project structure
import exit from "@/assets/images/closeesc.svg"; // Adjust this path according to your project structure
import { inject } from "vue";

export default {
  name: "Header",
  props: {},
  data() {
    return {
      menu,
      exit,
      menuVisible: false, // new state variable to control the visibility of the mobile menu
      menuActive: "home", // new state variable to control the visibility of the mobile menu
    };
  },
  setup() {
    const menuVisible = inject("menuVisible");

    const openMenu = () => {
      menuVisible.value = true;
    };

    const closeMenu = () => {
      menuVisible.value = false;
    };

    return { menuVisible, openMenu, closeMenu };
  },
  methods: {
    openMenu() {
      this.menuVisible = true;
    },
    closeMenu() {
      this.menuVisible = false;
    },
    sectionOpen(section) {
      this.menuActive = section;
    },
  },
  computed: {},
};
</script>

<style scoped></style>
