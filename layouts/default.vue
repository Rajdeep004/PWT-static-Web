<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue";

import { Dialog, DialogPanel } from "@headlessui/vue";

const navigation = [
  // { name: 'Courses', href: '#' },
  { name: "About PTE", href: "/about" },
  { name: "Our Achivements", href: "/#wof" },
  { name: "Contact", href: "/contact" },
  { name: "Inquiry", href: "/inquiry" },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <SpeedInsights />
  <header class="">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">PTE with Tejal</span>
          <img class="h-12 w-auto" src="/img/pwt logo.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Icon
            name="material-symbols:menu"
            class="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="cursor-pointer text-sm font-semibold leading-6 text-gray-900"
          >{{ item.name }}</NuxtLink
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button class="btn-primary">
          <a href="https://practice.ptewithtejal.com/" class=""
            >Log in <Icon name="line-md:arrow-right" class="text-xl"
          /></a>
        </button>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-12 w-auto" src="/img/pwt logo.png" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <Icon
              name="material-symbols:close-rounded"
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                @click="mobileMenuOpen = false"
                class="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</NuxtLink
              >
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Log in <Icon name="line-md:arrow-right" class="text-xl"
              /></a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  <NuxtPage />

  <footer class="bg-gray-100">
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
    >
      <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
        <a
          class="group inline-block rounded-full bg-primary p-2 text-white shadow-sm ring-primary transition hover:bg-bkg hover:ring-2 sm:p-3 lg:p-4"
          href="#MainContent"
        >
          <span class="sr-only">Back to top</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5 fill-bkg group-hover:fill-primary"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>

      <div class="lg:flex lg:items-end lg:justify-between">
        <div>
          <div class="flex justify-center text-teal-600 lg:justify-start">
            <a href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">PTE with Tejal</span>
              <img class="h-12 w-auto" src="/img/pwt logo.png" alt="" />
            </a>
          </div>

          <div
            class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
          >
            <div class="grid grid-flow-col gap-4 text-bkg">
              <a
                href="https://www.instagram.com/ptewithtejal/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name="line-md:instagram"
                  class="basicanimation text-[1.5rem] text-primary hover:scale-110"
                />
              </a>
              <a
                href="https://www.facebook.com/ptewithtejal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name="line-md:facebook"
                  class="basicanimation text-[1.5rem] text-primary hover:scale-110"
                />
              </a>
              <a
                href="https://www.youtube.com/@ptewithtejal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  name="line-md:youtube"
                  class="basicanimation text-[1.5rem] text-primary hover:scale-110"
                />
              </a>
              <a href="" rel="noopener noreferrer">
                <Icon
                  name="line-md:linkedin"
                  class="basicanimation text-[1.5rem] text-primary hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>

        <ul
          class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
        >
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            @click="mobileMenuOpen = false"
            class="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
            >{{ item.name }}</NuxtLink
          >
        </ul>
      </div>

      <p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
        Copyright &copy; 2025. Created by Pixiophile Solutions Pvt. Ltd.
      </p>
    </div>
  </footer>
</template>
