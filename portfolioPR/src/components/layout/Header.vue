<template>
  <header class="full py-[40px] bg-black max-[500px]:px-[35px] max-[500px]:py-[40px]">
    <div class="flex justify-between">
      <h2 class="font-serif text-[28px] font-bold text-white">&lt;edu.&gt;</h2>
      <img class="min-[500px]:hidden" :src="menu" alt="" />
      <nav class="flex text-[22px] items-center gap-[60px] font-serif text-white max-[500px]:hidden">
        <a class="border-b" href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Tech</a>
        <a class="border border-white p-[5px] rounded-[5px]" href="#">Contact</a>
      </nav>
    </div>
    <!-- <h1 class="font-hero text-3xl font-light text-white">HELLO, WORLD!</h1> -->
  </header>
</template>

<script>
import menu from "@/assets/images/mobmenu.svg"; // Adjust this path according to your project structure

export default {
  name: "Header",
  props: {},
  data() {
    return {
      menu,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
