<script setup>
const formData = {
  sheet: "DemoClass!A:D",
  name: "",
  phone: "",
  email: "",
  city: "",
}
const submitForm = async () => {
  await useFetch('/api/submitsheet',{
    method: "post",
    query: formData
  })
}
// const courses = ref(["Course 1"]); 
// Add or fetch the list of courses as needed
</script>

<template>
  <div class="flex flex-col items-center justify-around gap-4 py-28 bg-primary md:flex-row " id="democlass">
    <form @submit.prevent="submitForm" class="md:items-baseline gap-4 md:flex-row md:scale-90 card-body">
      <h2 class="text-4xl font-bold text-bkg">Book a Demo Class</h2>
      <fieldset class="form-control">
        <legend>Full Name</legend>
        <input v-model="formData.name" type="text" placeholder="Full Name" required class="rounded bg-white p-2" />
      </fieldset>
      <fieldset class="form-control">
        <legend>Contact Number</legend>
        <input v-model="formData.phone" type="tel" placeholder="98765 43210" required class="rounded bg-white p-2" />
      </fieldset>
      <fieldset class="form-control">
        <legend>Email Address</legend>
        <input v-model="formData.email" type="email" placeholder="ptewithtejal@gmail.com" required
          class="rounded bg-white p-2" />
      </fieldset>
      <fieldset class="form-control">
        <legend>City</legend>
        <input v-model="formData.city" type="text" placeholder="Unjha" required class="rounded bg-white p-2" />
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
      <button type="submit" class="btn !bg-bkg !text-text" @submit.prvent="submitForm" >
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


