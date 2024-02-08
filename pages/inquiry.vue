<script setup>

</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Inquiry now!</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
          In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
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
              <span class="label-text">Message</span>
            </label>
            <textarea type="text" placeholder="Ask doubts" class="input input-bordered resize-none" cols="40" required />
          </div>
          <div class="form-control mt-6 flex items-center">
            <button class="btn btn-primary !w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>