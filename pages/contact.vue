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
<section class="text-gray-600 body-font relative">
  <div class="container px-5 py-8 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe 
        width="100%" height="100%" 
        class="absolute inset-0" 
        style="filter: contrast(1.2) opacity(0.6);" 
        frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3958822368704!2d72.37337221084967!3d23.804517678544393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c5f31e731b9bd%3A0xf2051a60c3f1592!2sPTE%20with%20Tejal%20(%20Heer%20Foreign%20Education)%20-%20Best%20PTE%20Class!5e0!3m2!1sen!2sin!4v1711524210355!5m2!1sen!2sin"
      />
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">SF, Shaswat Plaza, Ahmedabad - Patan Highway Rd, opp. GEB, Bharat Nagar, Unjha, Gujarat 384170</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed" href="mailto:ptewithtejal.com">ptewithtejal@gmail.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed"><a href="tel:08238607000">08238607000</a></p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <form class="card-body" @submit="submitForm">
          <h1 class="h1 mb-8">Contact Us!</h1>
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

<style scoped lang="postcss"></style>