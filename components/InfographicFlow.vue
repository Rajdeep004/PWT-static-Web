<template>
  <div class="space-y-10 bg-white p-8">
    <div class="text-center">
      <h1 class="mb-4 text-4xl font-bold">10+ Years Experince</h1>
      <span class="text-5xl font-extrabold text-accent">The Leader</span>
    </div>
    <div class="flex flex-col sm:flex-row justify-between">
      <div class="step-card">
        <div class="step-icon">
          <Icon name="fa6-solid:1" class="text-4xl" />
        </div>
        <h2 class="mt-4 text-xl font-bold">Certified Trainer</h2>
        <p>
          Visit our Directory page to search for any resources related to your
          learning needs...
        </p>
      </div>
      <div class="step-card">
        <div class="step-icon">
          <Icon name="fa6-solid:2" class="text-4xl" />
        </div>
        <h2 class="mt-4 text-xl font-bold">Certified Trainer</h2>
        <p>
          Make sure you are making the right decision. Compare the available
          choices...
        </p>
      </div>
      <div class="step-card">
        <div class="step-icon">
          <Icon name="fa6-solid:3" class="text-4xl" />
        </div>
        <h2 class="mt-4 text-xl font-bold">100% Satisfacation</h2>
        <p>
          Learn through NRICH Live integrated with Learning Management System...
        </p>
      </div>

    </div>
    <div class="stats shadow container mt-8">
      <div class="stat place-items-center">
        <div class="stat-title">Downloads</div>
        <div class="stat-value text-primary">31K</div>
        <div class="stat-desc">From January 1st to February 1st</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">Users</div>
        <div class="stat-value text-accent">4,200</div>
        <div class="stat-desc text-accent">↗︎ 40 (2%)</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">New Registers</div>
        <div class="stat-value text-primary">1,200</div>
        <div class="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.step-card {
  @apply flex w-3/4 sm:w-[30%] flex-col items-center justify-center space-y-2 mx-auto gap-4;
}

.step-icon {
  @apply h-16 w-16 rounded-full bg-primary p-4 text-white;
}
</style>
