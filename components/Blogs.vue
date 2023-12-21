<script setup>
const posts = ref([
  {
    id: 1,
    image: "path_to_image1.jpg",
    category: "EDUCATION",
    title: "Homescience: Nurturing Hearts, Enriching Homes",
  },
  {
    id: 2,
    image: "path_to_image2.jpg",
    category: "EDUCATION",
    title: "Government Scheme For girl child In India",
  },
  // ... add more posts
]);
</script>

<template>
  <div>
    <h1 class="h1 mb-4 text-primary">Explore <div class="text-accent">Latest Insights</div></h1>
    <div class="parent">
      <div class="div1 card bg-blue-200"><div class="content"></div></div>
      <div class="div2 card bg-pink-200"><div class="content"></div></div>
      <div class="div3 card bg-green-200"><div class="content"></div></div>
      <div class="div4 card bg-fuchsia-200"><div class="content"></div></div>
      <div class="div5 card bg-indigo-200"><div class="content"></div></div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply rounded-lg border p-4 shadow-lg;
}
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}

.div1 {
  grid-area: 1 / 1 / 3 / 3;
}
.div2 {
  grid-area: 3 / 1 / 7 / 2;
}
.div3 {
  grid-area: 3 / 2 / 7 / 3;
}
.div4 {
  grid-area: 4 / 3 / 7 / 4;
}
.div5 {
  grid-area: 1 / 3 / 4 / 4;
}

.content {
  @apply p-32;
}
</style>
