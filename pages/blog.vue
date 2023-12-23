<script setup>
const blogKey = vite.process.env.BLOG_KEY;
let blogdata = await useFetch(`https://www.googleapis.com/blogger/v3/blogs/50645724507718148/posts&key=${blogKey}`)
</script>

<template>
    <h1>Hello</h1>
</template>

<style scoped lang="postcss"></style>