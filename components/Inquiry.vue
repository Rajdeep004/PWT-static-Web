<script setup>
import { ref } from "vue";

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
 <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form class="card-body">
        <h1 class="text-5xl font-bold mb-8">Inquiry Now!</h1>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Full Name</span>
          </label>
          <input type="text" placeholder="Full Name" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="user@email.com" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Contact Number</span>
          </label>
          <input type="tel" placeholder="+91 9123456789" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">City</span>
          </label>
          <input type="text" placeholder="Unjha" class="input input-bordered" required />
        </div>
        <div class="form-control mt-6 flex items-center">
          <button class="btn btn-primary !w-full">Submit</button>
        </div>
      </form>
    </div>
</template>

<style scoped lang="postcss"></style>
