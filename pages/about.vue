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
  <section class="default_cursor_cs py-32">
    <div class="default_cursor_cs mx-auto max-w-6xl px-8 lg:px-0">
      <h2 class="default_cursor_cs h1 mb-12 text-primary">Our Team</h2>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div
          v-for="member in team"
          class="bg-ui rounded-card border p-1 shadow shadow-gray-950/5"
        >
          <img
            class="default_cursor_cs basicanimation aspect-square rounded-xl bg-red-50 object-contain"
            :src="`/img/Team/${member.Name}.png`"
            :alt="member.Name"
            height="460"
            width="460"
            loading="lazy"
          />
          <span class="h5 block px-1 pb-0.5 pt-1.5 text-xs text-accent"
            >{{ member.Name }}
            <span class="h6 text-primary">
              - {{ member.Designation }}</span
            ></span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss"></style>
