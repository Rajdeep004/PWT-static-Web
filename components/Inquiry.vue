<script setup>
import { ref } from "vue";

const supabase = useSupabaseClient();

const fullName = ref("");
const contactNumber = ref("");
const emailId = ref("");
const city = ref("");
// const courses = ref(["Course 1"]); // Add or fetch the list of courses as needed

const submitForm = async () => {
  const { data, error } = await supabase
    .from("democlass")
    .insert([
      {
        name: fullName.value,
        contact: contactNumber.value,
        email: emailId.value,
        city: city.value
      },
    ])
    .select();
    console.log(data,error);
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-around gap-4 py-28 bg-primary md:flex-row "
  >
    <h2 class="text-4xl font-bold text-bkg">Book a Demo Class</h2>
    <form
      @submit.prevent="submitForm"
      class="flex flex-col items-baseline gap-4 md:flex-row"
    >
      <fieldset>
        <legend>Full Name</legend>
        <input
          v-model="fullName"
          type="text"
          placeholder="Full Name"
          required
          class="rounded bg-white p-2"
        />
      </fieldset>
      <fieldset>
        <legend>Contact Number</legend>
        <input
          v-model="contactNumber"
          type="tel"
          placeholder="98765 43210"
          required
          class="rounded bg-white p-2"
        />
      </fieldset>
      <fieldset>
        <legend>Email Address</legend>
        <input
          v-model="emailId"
          type="email"
          placeholder="ptewithtejal@gmail.com"
          required
          class="rounded bg-white p-2"
        />
      </fieldset>
      <fieldset>
        <legend>City</legend>
        <input
          v-model="city"
          type="text"
          placeholder="Unjha"
          required
          class="rounded bg-white p-2"
        />
      </fieldset>
      <!-- <fieldset>
        <legend>Select Cousre</legend>
        <select v-model="selectedCourse" required class="rounded bg-white p-2">
          <option disabled value="">Search and select course</option>
          <option v-for="course in courses" :key="course" :value="course">
            {{ course }}
          </option>
        </select>
      </fieldset> -->
      <button type="submit" class="btn !bg-bkg !text-text" @submit="submitForm">
        BOOK NOW
      </button>
    </form>
  </div>
</template>

<style scoped lang="postcss">
legend {
  @apply text-bkg;
}
</style>
