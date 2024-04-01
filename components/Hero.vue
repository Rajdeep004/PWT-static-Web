<template>
    <section class="flex flex-col lg:flex-row justify-center items-center gap-8 p-6">
        <div class="lg:w-[40%] w-full space-y-6">
            <div class="space-y-2">
                <h4 class="h4 text-primary">Start your Favourite Course</h4>
            <h2 class="h2">Now learning from anywhere, and build your <span class="h2 text-accent underline underline-offset-3 decoration-2 decoration-primary decoration-wavy">bright career with PTE</span></h2>
            </div>
            <!-- <p class="mt-8">
                It has survied not only five centuries but also the leap into electronic typesetting 
            </p> -->
            <button class="btn-primary !w-fit !px-6">Start A course</button>
        </div>
        <div class="lg:w-[60%] w-full flex flex-col lg:flex-row items-end lg:items-start justify-end relative ">
            <div class="z-10 inset-0 bottom-10 flex items-start">
               <div class="rounded-[50%] w-36 lg:w-40 aspect-square bg-accent opacity-80 flex items-center justify-center font-bold lg:text-xl text-center text-white"> 500+  PTE <br/> Results </div>
                <SvgArrow class="w-24 -rotate-45 px-2 text-accent"/> 
            </div>
            <img 
                src="/img/Hero Page.png" 
                alt="Hero section girl" 
                class="lg:w-[80%] object-contain aspect-square"
            />
        </div>
    </section>
</template>