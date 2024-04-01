<template>
  <div class="flex flex-col sm:flex-row gap-4 w-3/4">
    <!-- Teacher Section -->
    <div class=" flex flex-1 items-center rounded-lg bg-primary p-8 shadow-lg text-white">
      <div class="flex-1 space-y-4">
        <h2 class="text-4xl font-bold">Book PTE Class</h2>
        <!-- <div class="text-3xl font-bold">Faculties</div> -->
        <a
          class="btn basicanimation"
          href="#democlass"
        >
          Book Now <Icon name="line-md:arrow-right" class="text-xl"/>
        </a>
      </div>
      <img src="/img/Teacher.webp" alt="Teacher" class="w-1/4" />
    </div>

    <!-- Student Section -->
    <div class="flex  flex-1 items-center rounded-lg bg-white p-8 shadow-lg">
      <div class="flex-1 space-y-4 ">
        <h2 class="text-4xl font-bold">PTE Vocuher</h2>
        <!-- <div class="text-3xl font-bold">STUDENT</div> -->
        <NuxtLink
          class="btn basicanimation bg-primary text-white"
          to="/inquiry"
        >
          Learn more <Icon name="line-md:arrow-right" class="text-xl"/>
        </NuxtLink>
      </div>
      <img src="/img/Student.webp" alt="Student" class="w-1/4" />
    </div>
  </div>
</template>
