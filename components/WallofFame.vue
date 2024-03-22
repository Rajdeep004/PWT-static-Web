<script setup>
const RESULT_COUNT = 12;

const images = [];
for (let i=1; i <= RESULT_COUNT; i++){
    images.push(`/img/WOF/${i}.png`)
}
</script>

<template>
    <section class="container mx-auto">
        <h2 class="h2 text-center mb-8">Wall of Fame</h2>
        <Swiper 
            :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
            :space-between="24" 
            :slides-per-view="4" 
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
            class=" max-w-6xl relative"
        >
            <Icon name="tabler:square-rounded-chevron-left-filled" class="text-black prev text-4xl" />
            <SwiperSlide v-for="path in images" :key="path">
                <img 
                    :src="path" 
                    alt="Result"
                    class="shadow-lg"
                />
            </SwiperSlide> 
            <Icon name="tabler:square-rounded-chevron-right-filled" class="text-black next text-4xl" />  
        </Swiper>
        <div id="swiper-pagination"/>
    </section>
</template>

<style scoped lang="postcss"></style>