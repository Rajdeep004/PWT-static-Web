<script setup>
const RESULT_COUNT = 12;

const images = [];
for (let i=1; i <= RESULT_COUNT; i++){
    images.push(`/img/WOF/${i}.png`)
}
const slidesPerView = computed(() => {
  if (process.client) { // Check if we're on the client
    const width = window.innerWidth;
    if (width >= 1024) {
      return 4; 
    } else if (width >= 768) {
      return 3;
    } else {
      return 1; 
    }
  } else {
    return 1; // Default for SSR
  }
});
</script>

<template>
    <section id="wof" class="container mx-auto flex flex-col items-center justify-center">
        <h2 class="h2 text-center mb-8">Wall of Fame</h2>
        <Swiper 
            :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
            :space-between="24" 
            :slides-per-view="slidesPerView" 
            :loop="true" 
            :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
            }"
            :pagination="{
               el: '#swiper-pagination',
               clickable: true
            }"
            :navigation="{
                nextEl: '.next',
                prevEl: '.prev'
            }"
            class="max-w-lg lg:max-w-6xl relative flex spa"
        >
            <SwiperSlide v-for="path in images" :key="path">
                <img 
                    :src="path" 
                    alt="Result"
                    class="shadow-lg"
                />
            </SwiperSlide> 
            <div class="flex justify-between w-full z-20 absolute !bottom-[50%]">
                <Icon name="tabler:square-rounded-chevron-left-filled" class="text-black prev text-4xl" />
                <Icon name="tabler:square-rounded-chevron-right-filled" class="text-black next text-4xl" />
            </div>
        </Swiper>
        <div class="flex"><div id="swiper-pagination"/></div>
    </section>
</template>
