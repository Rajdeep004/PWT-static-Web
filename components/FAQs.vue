<script setup>
const faqs = ref([
  {
    question: "How do I purchase a course?",
    answer: "To purchase a course, you need to...",
  },
  {
    question: "What are the benefits of being a member?",
    answer: "Being a member provides you...",
  },
  {
    question: "What are the benefits of being a member?",
    answer: "Being a member provides you...",
  },
  {
    question: "What are the benefits of being a member?",
    answer: "Being a member provides you...",
  },
  {
    question: "What are the benefits of being a member?",
    answer: "Being a member provides you...",
  },
  {
    question: "What are the benefits of being a member?",
    answer: "Being a member provides you...",
  },
  // ... Add more FAQs
]);
</script>

<template>
  <div>
    <h1 class="h1 text-primary">
      Frequently Asked Questions <span class="text-accent">( FAQ’s )</span>
    </h1>
    <section class="">
      <div
        v-for="faq in faqs"
        :key="faq.question"
        class="h4 mb-4 bg-white px-2 py-5 transition-all"
      >
        <details class="details details-primary">
          <summary>{{ faq.question }}</summary>
          <div class="mt-2 text-gray-600">
            {{ faq.answer }}
          </div>
        </details>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
