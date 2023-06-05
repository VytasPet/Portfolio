<template>
  <section :class="{ 'blur-[5px]': menuVisible }" class="relative h-[85vh]">
    <div class="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center pb-[50px]">
      <h3 class="font-hero text-[30px] mb-[20px] text-center text-white max-[500px]:text-[25px]">HELLO, I'M</h3>
      <h3 class="font-hero text-[65px] mb-[20px] text-center text-white max-[500px]:text-[50px]">WEB</h3>
      <h3 class="font-hero text-[45px] mb-[20px] text-center text-white max-[500px]:text-[32px]">DEVELOPER</h3>
      <p class="font-serif text-center my-[25px] text-[32px] text-white max-[500px]:text-[14px] max-[500px]:mb-[35px]">Ongoing front-end developer</p>
      <div class="flex flex-col justify-center items-center max-[500px]:flex-col-reverse">
        <div class="flex gap-[25px] mb-[55px] max-[500px]:mt-[25px]">
          <a href="https://github.com/VytasPet" target="_blank">
            <img :src="git" alt="" />
          </a>

          <img class="cursor-pointer" @click="sendEmail" :src="mail" alt="" />
          <a href="https://www.linkedin.com/in/vytautas-petrucionis-792334102/" target="_blank">
            <img class="cursor-pointer" :src="git" alt="" />
          </a>
        </div>
        <button @click="$emit('contactOpen')" class="btn font-inter w-fit cursor-pointer border hover:bg-black hover:border-white hover:text-white">Contact</button>
      </div>
    </div>
    <img class="w-[30%] absolute bottom-[-10%] min-[940px]:top-[50%] min-[500px]:top-[80%] left-[-5%] translate-y-[-50%]" :src="worms" alt="" />
    <img class="w-[30%] absolute top-[10%] left-[90%] translate-x-[-50%] min-[500px]:w-1/4 min-[500px]:top-[0%] max-[500px]:top-[65%] max-[500px]:w-1/5" :src="astro" alt="" />
    <img @click="sectionOpen('projects')" class="w-[25px] cursor-pointer absolute left-[50%] translate-x-[-50%] bottom-[3%] max-[500px]:hidden" :src="down" alt="" />
  </section>
</template>

<script>
import worms from "@/assets/images/sliekasF.svg"; // Adjust this path according to your project structure
import astro from "@/assets/images/astro.svg"; // Adjust this path according to your project structure
import down from "@/assets/images/down.svg"; // Adjust this path according to your project structure
import git from "@/assets/images/githu.svg"; // Adjust this path according to your project structure
import linke from "@/assets/images/linkedin.svg"; // Adjust this path according to your project structure
import mail from "@/assets/images/mail.svg"; // Adjust this path according to your project structure
import { inject } from "vue";

export default {
  name: "Hero",
  props: {},
  data() {
    return {
      worms,
      astro,
      down,
      git,
      linke,
      mail,
    };
  },
  setup() {
    const menuVisible = inject("menuVisible");

    return { menuVisible };
  },
  methods: {
    sendEmail() {
      window.open = window.open("mailto:v.petrucionis@gmail.com", "_blank");
    },
    sectionOpen(section) {
      this.$emit("sectionOpen", section);
    },
  },
  computed: {},
};
</script>

<style scoped></style>
