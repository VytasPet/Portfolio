<template>
  <footer class="py-[60px] px-[125px] max-[900px]:px-[35px]">
    <div>
      <div class="flex justify-between max-[650px]:flex-col max-[650px]:justify-center max-[650px]:flex-col-reverse">
        <div class="w-1/3 max-[650px]:w-full">
          <h2 class="font-serif text-white text-[14px] max-[650px]:text-center max-[650px]:mb-[20px] max-[650px]:hidden">
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications
          </h2>
        </div>
        <div class="flex gap-[25px] mb-[55px] items-center max-[650px]:flex-col">
          <div class="flex gap-[25px] items-center max-[650px]:gap-[40px]">
            <img class="cursor-pointer" :src="git" alt="" />
            <img class="cursor-pointer" @click="sendEmail" :src="mail" alt="" />
            <img class="cursor-pointer" :src="linke" alt="" />
          </div>

          <!-- <button @click="sendEmail" class="btn font-inter w-fit ml-[20px] px-[30px] py-[10px] max-[650px]:ml-0">Contact</button> -->
        </div>
      </div>
      <p class="text-center text-white opacity-70">© Copyright 2023</p>
    </div>
  </footer>
</template>

<script>
import git from "@/assets/images/githu.svg"; // Adjust this path according to your project structure
import linke from "@/assets/images/linkedin.svg"; // Adjust this path according to your project structure
import mail from "@/assets/images/mail.svg"; // Adjust this path according to your project structure
export default {
  name: "Footer",
  props: {},
  data() {
    return {
      git,
      linke,
      mail,
    };
  },
  methods: {
    sendEmail() {
      window.open = window.open("mailto:v.petrucionis@gmail.com", "_blank");
    },
  },

  computed: {},
};
</script>

<style scoped></style>
