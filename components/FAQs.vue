<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const faqs = [
  {
    question: "What is 'PTE with Tejal'?",
    answer: "'PTE with Tejal' is a comprehensive coaching program designed to help students excel in the Pearson Test of English Academic (PTE). With expert guidance from Tejal, students are equipped with proven strategies to tackle every section of the exam."
  },
  {
    question: "Who is Tejal and what is her expertise in PTE?",
    answer: "Tejal is a seasoned PTE instructor with years of experience in helping students achieve their desired scores. Her deep understanding of the PTE exam and its nuances ensures that students receive top-notch guidance."
  },
  {
    question: "How does 'PTE with Tejal' differ from other PTE coaching programs?",
    answer: "Our program focuses on individualized attention, understanding each student's unique challenges, and providing tailored strategies. With Tejal's 21 proven strategies, students are better prepared to tackle the PTE exam."
  },
  {
    question: "Do you offer both online and offline coaching?",
    answer: "Yes, 'PTE with Tejal' offers both online coaching for global students and offline coaching at our centers in Unjha and Australia."
  },
  {
    question: "What are the '21 Proven Strategies' mentioned?",
    answer: "The '21 Proven Strategies' are a set of techniques and methods curated by Tejal over the years to address specific challenges students face in the PTE exam. These strategies cover all sections of the exam and are designed to boost scores."
  },
  {
    question: "How can I enroll in the 'PTE with Tejal' coaching program?",
    answer: "You can enroll by visiting our website and choosing the course that best fits your needs. Our team will guide you through the enrollment process."
  },
  {
    question: "Do you offer any trial classes or demo sessions?",
    answer: "Yes, we do offer demo sessions for students to get a feel of our teaching methodology and interact with Tejal. You can schedule a demo session through our website."
  },
  {
    question: "How long is the duration of the coaching program?",
    answer: "The duration varies based on the course you choose. We offer both short-term intensive courses and longer, more comprehensive courses. Details are available on our website."
  },
  {
    question: "Do you provide practice tests and study materials?",
    answer: "Absolutely! Our students receive a wealth of study materials, practice tests, and mock exams to ensure they are thoroughly prepared for the PTE exam."
  },
  {
    question: "What if I have specific challenges or areas I'm struggling with in the PTE?",
    answer: "Our program is designed to address individual challenges. Tejal provides personalized feedback and strategies to help students overcome specific hurdles they face in their PTE preparation."
  }
];
</script>

<template>
  <div class="w-full px-4 pt-16">
    <h1 class="h1 text-primary">
      Frequently Asked Questions <span class="text-accent h1">( FAQ’s )</span>
    </h1>
    <div class="mx-auto w-full rounded-2xl bg-white p-4 mt-8 space-y-2">
      <div v-for="faq in faqs" :key="faq.question" class="h4 transition-all flex flex-col gap-4">
        <Disclosure v-slot="{ open }">
          <div>
          <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-[#dbe3f0] px-4 py-2 text-left text-sm font-medium text-primary hover:bg-[#b7c6e1] focus:outline-none focus-visible:ring focus-visible:ring-primary/75">
            <span>{{ faq.question }}</span>
            <Icon name="material-symbols:keyboard-arrow-up-rounded" :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-[#4b72b4]" />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pb-2 pt-4 font-normal text-sm text-text rounded-lg bg-[#edf1f7]">
            {{ faq.answer }}
          </DisclosurePanel></div>
        </Disclosure>
      </div>
    </div>
  </div>
</template>


<!-- <script setup>
const faqs = [
  {
    question: "What is 'PTE with Tejal'?",
    answer: "'PTE with Tejal' is a comprehensive coaching program designed to help students excel in the Pearson Test of English Academic (PTE). With expert guidance from Tejal, students are equipped with proven strategies to tackle every section of the exam."
  },
  {
    question: "Who is Tejal and what is her expertise in PTE?",
    answer: "Tejal is a seasoned PTE instructor with years of experience in helping students achieve their desired scores. Her deep understanding of the PTE exam and its nuances ensures that students receive top-notch guidance."
  },
  {
    question: "How does 'PTE with Tejal' differ from other PTE coaching programs?",
    answer: "Our program focuses on individualized attention, understanding each student's unique challenges, and providing tailored strategies. With Tejal's 21 proven strategies, students are better prepared to tackle the PTE exam."
  },
  {
    question: "Do you offer both online and offline coaching?",
    answer: "Yes, 'PTE with Tejal' offers both online coaching for global students and offline coaching at our centers in Unjha and Australia."
  },
  {
    question: "What are the '21 Proven Strategies' mentioned?",
    answer: "The '21 Proven Strategies' are a set of techniques and methods curated by Tejal over the years to address specific challenges students face in the PTE exam. These strategies cover all sections of the exam and are designed to boost scores."
  },
  {
    question: "How can I enroll in the 'PTE with Tejal' coaching program?",
    answer: "You can enroll by visiting our website and choosing the course that best fits your needs. Our team will guide you through the enrollment process."
  },
  {
    question: "Do you offer any trial classes or demo sessions?",
    answer: "Yes, we do offer demo sessions for students to get a feel of our teaching methodology and interact with Tejal. You can schedule a demo session through our website."
  },
  {
    question: "How long is the duration of the coaching program?",
    answer: "The duration varies based on the course you choose. We offer both short-term intensive courses and longer, more comprehensive courses. Details are available on our website."
  },
  {
    question: "Do you provide practice tests and study materials?",
    answer: "Absolutely! Our students receive a wealth of study materials, practice tests, and mock exams to ensure they are thoroughly prepared for the PTE exam."
  },
  {
    question: "What if I have specific challenges or areas I'm struggling with in the PTE?",
    answer: "Our program is designed to address individual challenges. Tejal provides personalized feedback and strategies to help students overcome specific hurdles they face in their PTE preparation."
  }
];
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

<style scoped></style> -->
