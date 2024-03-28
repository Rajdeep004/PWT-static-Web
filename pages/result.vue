<script setup>
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

const categories = {
    "83 to 90": createRepeatedObjects("86 to 90", 2),
    // "83 to 85": createRepeatedObjects("83 to 85", 0),
    "79 to 82": createRepeatedObjects("79 to 82", 1),
    "73 to 78": createRepeatedObjects("73 to 78", 3),
    "65 to 72": createRepeatedObjects("65 to 72", 34),
    "58 to 64": createRepeatedObjects("58 to 64", 120),
    "50 to 57": createRepeatedObjects("50 to 57", 173),
}
</script>

<template>
    <div class="w-full max-w-5xl 2xl:max-w-7xl px-2 py-16 sm:px-0 container">
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
                    <section class="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
                        <div :id="post.curr" class="carousel-item relative w-full" v-for="post in gallery" :key="post.id">
                            <img :src="post.path" alt="Result Image" class=""/>
                        </div>
                    </section>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>


<!-- <div class="carousel w-full">
                        <div :id="post.curr" class="carousel-item relative w-full" v-for="post in gallery" :key="post.id">
                            <img :src="post.path" alt="Result Image" />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a :href="post.prev" class="btn btn-circle">❮</a>
                                <a :href="post.next" class="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> -->