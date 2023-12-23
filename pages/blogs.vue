<script setup>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
const blogKey = "AIzaSyBxd02RP9V_f60HO6eCNRfvKfXi0_qTxNU";
const blogdata = await useFetch(`https://www.googleapis.com/blogger/v3/blogs/50645724507718148/posts?key=${blogKey}`);

const blogitems = await blogdata.data.value.items;
const isOpens = ref([false, false, false])
</script>

<template>
    <section id="blog" class="grid grid-cols-1 md:grid-cols-3 gap-2 p-4 container mx-auto">
        <div v-for="(item,index) in blogitems" :key="item.id" class="col-span-1">
            <div class="card sm:w-96 glass gap-4">
                <figure><img src="/img/bluegirl.jpg" alt="PTE Master Course" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{{ item.title }}</h2>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary cursor-pointer" @click="isOpens[index] = true">Learn now!</button>
                    </div>
                    <!-- Assigning the modal component for each blog item -->
                    <TransitionRoot appear :show="isOpens[index]" as="template">
                        <Dialog as="div" @close="isOpens[index]=false" class="relative z-10">
                            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                                enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                                leave-to="opacity-0">
                                <div class="fixed inset-0 bg-black/25" />
                            </TransitionChild>

                            <div class="fixed inset-0 overflow-y-auto">
                                <div class="flex min-h-full items-center justify-center p-4 text-center">
                                    <TransitionChild as="template" enter="duration-300 ease-out"
                                        enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                                        leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                                        leave-to="opacity-0 scale-95">
                                        <DialogPanel
                                            class="w-full  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900"
                                        >
                                                {{ item.title }}
                                            </DialogTitle>
                                            <div class="mt-2">
                                                <div class="text-sm text-gray-500" v-html="item.content"></div>
                                            </div>

                                            <div class="mt-4">
                                                <button type="button"
                                                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    @click="isOpens[index] = false">
                                                    Got it, thanks!
                                                </button>
                                            </div>
                                        </DialogPanel>
                                    </TransitionChild>
                                </div>
                            </div>
                        </Dialog>
                    </TransitionRoot>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="postcss"></style>