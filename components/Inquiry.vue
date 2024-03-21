<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

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
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <!-- <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Inquiry Form
              </DialogTitle> -->
              <div class="shrink-0 w-full flex flex-col lg:flex-row">
                <Icon name="maki:cross-11" class="text-black text-lg hover:scale-110 basicanimation absolute right-6 top-4 cursor-pointer" @click="isOpen = false"/>
                <div class="card-body items-center justify-center gap-8">
                  <img src="/img/pwt logo.png" alt="PWT Logo" class="w-48" />
                  <div>
                    <h3 class="h3 text-center text-primary">Any Queries??</h3>
                    <h6 class="h5 text-center text-accent ">Let us know</h6>
                  </div>
                </div>
                <form @submit.prevent="submitForm" class="card-body lg:w-1/2">
                  <h1 class="h1 mb-8">Inquiry Now!</h1>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Full Name</span>
                    </label>
                    <input type="text" v-model="formData.name" placeholder="Full Name" class="input input-bordered" required />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input type="email" v-model="formData.email" placeholder="user@email.com" class="input input-bordered" inputmode="email" required />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Contact Number</span>
                    </label>
                    <input type="tel" v-model="formData.phone" placeholder="+91 9123456789" class="input input-bordered" inputmode="numeric" required />
                  </div>
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Message</span>
                    </label>
                    <textarea type="text" v-model="formData.message" placeholder="Ask doubts" class="input input-bordered resize-none" cols="" required />
                  </div>
                  <div class="form-control mt-6 flex items-center">
                    <button type="submit" class="btn btn-primary !w-full basicanimation" @submit.prevent="submitForm">Submit</button>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
