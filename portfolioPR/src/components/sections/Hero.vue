<template>
  <section class="overflow-x-hidden relative h-[85vh]">
    <div class="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center pb-[50px]">
      <h3 class="font-hero text-[30px] mb-[20px] text-center text-white">HELLO, I'M</h3>
      <h3 class="font-hero text-[65px] mb-[20px] text-center text-white">WEB</h3>
      <h3 class="font-hero text-[45px] mb-[20px] text-center text-white">DEVELOPER</h3>
      <p class="font-serif text-center my-[25px] text-[32px] text-white">Ongoing front-end developer</p>
      <div class="flex gap-[25px] mb-[55px]">
        <i class="text-white fa fa-envelope fa-2x" aria-hidden="true"></i>
        <i class="text-white fa fa-github-square fa-2x" aria-hidden="true"></i>
        <i class="text-white fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
      </div>
      <button class="btn font-inter w-fit">Contact</button>
    </div>
    <img class="w-[30%] absolute top-[50%] left-[-5%] translate-y-[-50%]" :src="worms" alt="" />
    <img class="w-[30%] absolute top-[10%] left-[90%] translate-x-[-50%]" :src="astro" alt="" />
    <img class="w-[25px] absolute left-[50%] translate-x-[-50%] bottom-[3%]" :src="down" alt="" />
  </section>
</template>

<script>
import worms from "@/assets/images/sliekasF.svg"; // Adjust this path according to your project structure
import astro from "@/assets/images/astro.svg"; // Adjust this path according to your project structure
import down from "@/assets/images/down.svg"; // Adjust this path according to your project structure

export default {
  name: "Hero",
  props: {},
  data() {
    return {
      worms,
      astro,
      down,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
