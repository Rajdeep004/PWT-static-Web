<script setup>
const experts = [
  {
    score: "90/100",
    name: "Shaili Parekh",
    id: 1,
  },
  {
    score: "88/100",
    name: "Astha Patel",
    id: 2,
  },
  {
    score: "79/100",
    name: "Nikul Chaudhary",
    id: 3,
  },
  {
    score: "76/100",
    name: "Karan Parmar",
    id: 4,
  },
  {
    score: "76/100",
    name: "Soham Patel",
    id: 5,
  },
];
</script>

<template>
  <div class="flex flex-col items-center justify-evenly gap-4  to-accent px-6 py-28 md:flex-row bg-primary">
    <h2 class="text-4xl font-bold text-bkg">Achievements By Our Students</h2>
    <div class="flex ">
      <div v-for="expert in experts" :key="expert.name" class="flex flex-col items-center m-2">
        <img src="/favicon.png" alt="Student Image" class="h-16 w-16 rounded-full border-2 border-white object-cover" />
        <h3 class="text-white text-center mt-2">{{ expert.score }} <br> <span class="text-sm text-white">{{ expert.name
        }}</span></h3>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<!-- <div class="overflow-x-auto">
  <table class="table table-zebra">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="expert in experts" :key="expert.id">
        <th>{{ expert.id }}</th>
        <td>{{ expert.name }}n</td>
        <td>{{ expert.score }}</td>
      </tr>
    </tbody>
  </table>
</div> -->