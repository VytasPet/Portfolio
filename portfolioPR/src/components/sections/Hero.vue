<template>
  <section class="overflow-x-hidden relative h-[80vh]">
    <div class="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center">
      <h3 class="font-hero text-[40px] mb-[20px] text-center text-white">HELLO, I'M</h3>
      <h3 class="font-hero text-[75px] mb-[20px] text-center text-white">WEB</h3>
      <h3 class="font-hero text-[55px] mb-[20px] text-center text-white">DEVELOPER</h3>
      <p class="font-serif text-center my-[25px] text-[32px] text-white">Ongoing front-end developer</p>
      <i class="text-white fa fa-camera-retro"></i>
      <button class="btn font-inter w-fit">Contact</button>
    </div>
    <img class="w-[40%] absolute top-[50%] left-[-5%] translate-y-[-50%]" :src="worms" alt="" />
    <img class="w-[30%] absolute top-[10%] left-[90%] translate-x-[-50%]" :src="astro" alt="" />
  </section>
</template>

<script>
import worms from "@/assets/images/sliekasF.svg"; // Adjust this path according to your project structure
import astro from "@/assets/images/astro.svg"; // Adjust this path according to your project structure

export default {
  name: "Hero",
  props: {},
  data() {
    return {
      worms,
      astro,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
