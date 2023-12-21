<script setup>

</script>

<template>
  <header>
    <nav
      class="container my-4 flex items-baseline justify-between border-gray-200 px-4 py-2.5 lg:px-6"
    >
      <img src="img/pwt logo.png" class="mr-3 h-8 sm:h-16" alt="PWT Logo" />
      <button class="btn">Login</button>
    </nav>
  </header>

  <div><slot /></div>
  <footer></footer>
</template>

<style lang="postcss"></style>
