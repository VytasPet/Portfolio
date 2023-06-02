<template>
  <footer class="py-[60px] px-[125px] max-[900px]:px-[35px]">
    <div>
      <div class="flex justify-between">
        <div class="w-1/3">
          <h2 class="font-serif text-white text-[14px]">A Frontend focused Web Developer building the Frontend of Websites and Web Applications</h2>
        </div>
        <div class="flex gap-[25px] mb-[55px] items-center">
          <img :src="git" alt="" />
          <img :src="mail" alt="" />
          <img :src="linke" alt="" />
          <button class="btn font-inter w-fit ml-[20px] px-[30px] py-[10px]">Contact</button>
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
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
