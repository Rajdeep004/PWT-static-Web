<script setup>
const isOpen = ref(true)

const formData = {
  name: "",
  phone: "",
  email: "",
  message: "",
  cretedAt: new Date(Date.now()).toLocaleString()
}

const submitForm = async () => {
  isOpen.value = false;
  await useFetch('https://hook.eu2.make.com/2pyp914eqsx7scvmgme1phw7t7roijbo',{
    method: "post",
    query: formData
  })
  
}
</script>

<template>
  <section class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="card shrink-0 w-full max-w-4xl shadow-2xl bg-base-100 flex flex-col lg:flex-row">
        <div class="card-body items-center justify-center gap-8">
          <img src="/img/pwt logo.png" alt="PWT Logo" class="w-48"/>
          <div>
            <h3 class="h3 text-center text-primary">Any Queries??</h3>
            <h6 class="h5 text-center text-accent ">Let us know</h6>
          </div>
        </div>
        <form class="card-body lg:w-1/2" @submit="submitForm">
          <h1 class="h1 mb-8">Inquiry Now!</h1>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Full Name" class="input input-bordered" required v-model="formData.name" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" placeholder="user@email.com" class="input input-bordered" inputmode="email" required v-model="formData.email"/>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Contact Number</span>
            </label>
            <input type="tel" placeholder="+91 9123456789" class="input input-bordered" inputmode="numeric" required v-model="formData.phone"/>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Message</span>
            </label>
            <textarea type="text" placeholder="Inquiry" class="input input-bordered resize-none" cols="40" required v-model="formData.message"/>
          </div>
          <div class="form-control mt-6 flex items-center">
            <button class="btn btn-primary !w-full basicanimation" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

