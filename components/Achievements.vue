<script setup>
const experts = [
  {
    name: "JASHPREET BHULLAR",
    description: "O2 IAS Academy",
    image: "/favicon.ico",
  },
  {
    name: "Er. Nidhi Pandey",
    description: "Seyago Shiksha",
    image: "/favicon.ico",
  },
  {
    name: "SAGAR KUMAR",
    description: "SI COMPUTER ZONE",
    image: "/favicon.ico",
  },
  {
    name: "Nainesh Nagekar",
    description: "O2 IAS Academy",
    image: "/favicon.ico",
  },
  {
    name: "Anil Prajapati",
    description: "Seyago Shiksha",
    image: "/favicon.ico",
  },
  {
    name: "Hitesh Verma",
    description: "SI COMPUTER ZONE",
    image: "/favicon.ico",
  },
];
</script>

<template>
  <div
    class="flex flex-col items-center justify-around gap-4  to-accent p-6 py-28 md:flex-row bg-primary"
  >
    <h2 class="text-4xl font-bold text-bkg">Achievements By Our Experts</h2>
    <div class="flex flex-col md:flex-row space-x-6">
      <div
        v-for="expert in experts"
        :key="expert.name"
        class="flex flex-col items-center"
      >
        <img
          :src="expert.image"
          alt="Expert Image"
          class="h-16 w-16 rounded-full border-2 border-white object-cover"
        />
        <h3 class="mt-2 text-white">{{ expert.name }}</h3>
        <p class="text-sm text-white">{{ expert.description }}</p>
      </div>
    </div>
    <!-- <div class="flex space-x-2">
      <button class="text-3xl text-white">&lt;</button>
      <button class="text-3xl text-white">&gt;</button>
    </div> -->
  </div>
</template>

<style scoped></style>
