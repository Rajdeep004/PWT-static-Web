<script setup>
import { ref } from "vue";
const formData = {
  fullName: "",
  contactNumber: "",
  emailId: "",
  city: "",
}
const fullName = ref("");
const contactNumber = ref("");
const emailId = ref("");
const city = ref("");
// const courses = ref(["Course 1"]); 
// Add or fetch the list of courses as needed

</script>

<template>
  <div class="flex flex-col items-center justify-around gap-4 py-28 bg-primary md:flex-row " id="democlass">
    <form @submit.prevent="submitForm" class="flex flex-col items-baseline gap-4 md:flex-row md:scale-90">
      <h2 class="text-4xl font-bold text-bkg">Book a Demo Class</h2>
      <fieldset>
        <legend>Full Name</legend>
        <input v-model="fullName" type="text" placeholder="Full Name" required class="rounded bg-white p-2" />
      </fieldset>
      <fieldset>
        <legend>Contact Number</legend>
        <input v-model="contactNumber" type="tel" placeholder="98765 43210" required class="rounded bg-white p-2" />
      </fieldset>
      <fieldset>
        <legend>Email Address</legend>
        <input v-model="emailId" type="email" placeholder="ptewithtejal@gmail.com" required
          class="rounded bg-white p-2" />
      </fieldset>
      <fieldset>
        <legend>City</legend>
        <input v-model="city" type="text" placeholder="Unjha" required class="rounded bg-white p-2" />
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

<script>
// import {google} from 'googleapis'

// const { google } = require('googleapis')
// const submitForm = async () => {
//   const auth = new google.auth.GoogleAuth({
//     keyFile: "../credentials.json",
//     scopes: "https://www.googleapis.com/auth/spreadsheets",
//   });

//   const client = await auth.getClient();
//   const googleSheets = google.sheets({ version: "v4", auth: client });
//   const spreadsheetId = "12_6AF5KehrIbbwsDkc4WNA9CVfg-mwGcBJgsoo5kRdI";
//   googleSheets.spreadsheets.values.append({
//     auth,
//     spreadsheetId,
//     range: "DemoClass!A:D",
//     valueInputOption: "USER_ENTERED",
//     resource: {
//       values: [
//         ["Rajdeep", "9876543210", "rajdeepbarot23@gmail.com", "Unjha"],
//         // [fullName.value, contactNumber.value, emailId.value, city.value]
//       ],
//     },
//   });
// };



// const submitForm = async () => {
//   const formData = {
//     fullName: fullName.value,
//     contactNumber: contactNumber.value,
//     emailId: emailId.value,
//     city: city.value,
//   };

//   try {
//     const response = await useFetch("http://localhost:3002/democlass", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       console.log("Booking successful!");
//     } else {
//       console.log("Booking failed!");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };


</script>

<style scoped lang="postcss">
legend {
  @apply text-bkg;
}
</style>


