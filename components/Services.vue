<script setup>
const items = ref([
  {
    title: "Speaking",
    description: "Attend classes from anywhere with Zoom-enabled NRICH Meet.",
    icon: "/img/services/Speaking.svg",
  },
  {
    title: "Reading",
    description: "The largest marketplace for any resources in Education.",
    icon: "/img/services/Reading.svg",
  },
  {
    title: "Writing",
    description: "Learn, interact and take exams all from one place.",
    icon: "/img/services/Writing.svg",
  },
  {
    title: "Listening",
    description:
      "Efficiently manage leads with CRM for streamlined sales process.",
    icon: "/img/services/Listening.svg",
  },
  {
    title: "Templates",
    description:
      "Social Media is not a distraction, it is a learning experience.",
    icon: "/img/services/Templates.svg",
  },
  {
    title: "PTE Analysis",
    description:
      "Social Media is not a distraction, it is a learning experience.",
    icon: "/img/services/PTE Analysis.svg",
  },
  {
    title: "PTE Guide",
    description:
      "Social Media is not a distraction, it is a learning experience.",
    icon: "/img/services/PTE Guide.svg",
  },
  {
    title: "One More",
    description:
      "Some description",
    icon: "/"
  }
]);
</script>

<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
    <h2 class="mb-6 text-5xl font-bold text-primary flex flex-col justify-center items-center">
      Services at <div class="text-accent">PTE with Tejal</div>
    </h2>
    <div
      v-for="item in items"
      :key="item.title"
      class="card"
    >
      <img :src="item.icon" alt="Item Icon" class="mb-4 h-12 w-12" />
      <h3 class="mb-2 text-xl font-semibold">{{ item.title }}</h3>
      <p class="text">{{ item.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #f0f3fa;
  box-shadow: 0 5.12065px 5.12065px 5.12065px #00000008;
  border-radius: 14.0818px;
  padding: 40px 30px;
}
</style>
