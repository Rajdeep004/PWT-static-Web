<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const createRepeatedObjects = (folder, nums) => {
    const objects = [];

    for (let i = 1; i <= nums; i++) {
        objects.push({
            id: i,
            path: `/img/Results/${folder}/${i}.png`,
            curr: `slide${i}`,
            prev: i === 1 ? `#slide${nums}` : `#slide${i - 1}`,
            next: i === nums ? `#slide1` : `#slide${i + 1}`,
        });
    }

    return objects;
}

const categories = ref({
    "86 to 90": createRepeatedObjects("86 to 90", 2),
    "83 to 85": createRepeatedObjects("83 to 85", 0),
    "79 to 82": createRepeatedObjects("79 to 82", 1),
    "73 to 78": createRepeatedObjects("73 to 78", 3),
    "65 to 72": createRepeatedObjects("65 to 72", 34),
    "58 to 65": createRepeatedObjects("58 to 65", 120),
    "50 to 57": createRepeatedObjects("50 to 57", 173),
})
</script>

<template>
    <div class="w-full max-w-4xl px-2 py-16 sm:px-0 container">
        <TabGroup>
            <TabList class="flex space-x-1 rounded-xl bg-primary/80 p-1">
                <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
                    <button :class="[
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                        // 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                        selected
                            ? 'bg-primary text-bkg shadow'
                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                    ]">
                        {{ category }}
                    </button>
                </Tab>
            </TabList>

            <TabPanels class="mt-2">
                <TabPanel v-for="(gallery, idx) in Object.values(categories)" :key="idx" :class="[
                    'rounded-xl bg-white p-3',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]">
                    <div class="carousel w-full">
                        <div :id="post.curr" class="carousel-item relative w-full" v-for="post in gallery" :key="post.id">
                            <img :src="post.path" alt="Result Image" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a :href="post.prev" class="btn btn-circle">❮</a>
                                <a :href="post.next" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>
  

  

<!-- <script setup>

</script>

<template class="">
    <section class="w-full flex justify-center items-center gap-4">
        <div class="card w-96 glass">
            <figure><img src="/img/bluegirl.jpg" alt="PTE Master Course" /></figure>
            <div class="card-body">
                <h2 class="card-title">PTE Master Course</h2>
                <p>How to park your car at your garage? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                   </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
        <div class="card w-96 glass">
            <figure><img src="/img/redgirl.jpg" alt="PTE Master Course" class="h-64 object-cover scale-125"/></figure>
            <div class="card-body">
                <h2 class="card-title">PTE Voucher</h2>
                <p>How to park your car at your garage? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                    </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    </section>
    
</template>

<style scoped lang="postcss"></style> -->