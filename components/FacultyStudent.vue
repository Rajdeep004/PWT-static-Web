<template>
  <div class="flex w-full space-x-8">
    <!-- Teacher Section -->
    <div class="flex flex-1 items-center rounded-lg bg-white p-8 shadow-lg">
      <div class="flex-1 space-y-4">
        <h2 class="text-4xl font-bold">Book PTE Class</h2>
        <!-- <div class="text-3xl font-bold">Faculties</div> -->
        <button
          class="btn"
        >
          Learn more &rarr;
        </button>
      </div>
      <img src="/img/Teacher.webp" alt="Teacher" class="w-1/4" />
    </div>

    <!-- Student Section -->
    <div class="flex flex-1 items-center rounded-lg bg-primary p-8 shadow-lg">
      <div class="flex-1 space-y-4 text-white">
        <h2 class="text-4xl font-bold">PTE Vocuher</h2>
        <!-- <div class="text-3xl font-bold">STUDENT</div> -->
        <button
          class="rounded bg-white px-4 py-2 text-primary transition hover:bg-gray-200"
        >
          Learn more &rarr;
        </button>
      </div>
      <img src="/img/Student.webp" alt="Student" class="w-1/4" />
    </div>
  </div>
</template>
