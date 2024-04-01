<script setup>
const team = [
  {
    Name: "Tejal Patel",
    Designation: "Founder of PWT",
  },
  {
    Name: "Pragnesh Patel",
    Designation: "Visa Expert",
  },
  {
    Name: "Brijesh Patel",
    Designation: "Marketing",
  },
  {
    Name: "Bimal Patel",
    Designation: "Student Relationship",
  },
  {
    Name: "Niral Patel",
    Designation: "Mock Test Evaluator",
  },
  {
    Name: "Rutvi Patel",
    Designation: "Counselor",
  },
];
</script>

<template>
  <section>
    <div class="bg-gray-50 py-2 dark:bg-gray-800 flex">
      <div class="hidden w-2/12 bg-primary text-white lg:inline-flex items-center justify-center">
          <h2 class="h1 mb-4 text-center -rotate-90 w-full ">Our Team</h2>
        </div>
      <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <h2 class="lg:hidden h1 text-center my-12">Our Team</h2>
        <div class="grid items-center gap-y-12 md:grid-cols-3">
          <div v-for="member in team" class="space-y-4 text-center">
            <img
              class="mx-auto h-64 w-64 rounded-xl bg-[#e0e0de] object-cotain md:h-40 md:w-40 lg:h-40 lg:w-40"
              :src="`/img/Team/${member.Name}.png`"
              :alt="member.Name"
              loading="lazy"
              width="640"
              height="805"
              draggable="false"
            />
            <div class="">
              <h4 class="text-2xl text-gray-700 dark:text-white">
                {{ member.Name }}
              </h4>
              <span class="block text-sm text-gray-500">
                {{ member.Designation }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss"></style>
