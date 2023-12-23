<script setup>
const subtitleIdx = ref(0)
const subtitles = ref([
    "Subtitle1",~
    "Subtitle2",
    "Subtitle3",
    "Subtitle4",
    "Subtitle5"
])
</script>

<template>
    <div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content mx-2">
    <!-- Page content here -->
    <!-- <h1 class="h2">{{ subtitles.at(subtitleIdx) }}</h1> -->
    <h2 class="h1 text-center text-primary fw-bold wow fadeInUp mb-2 mb-md-4"
        style="visibility: visible; animation-name: fadeInUp;">PTE-A Speaking Module</h2>
    <div class="fw-500 mt-0 mb-2 mb-md-4">
        The first part of the test will evaluate your Speaking and <a href="writing.html" target="_blank"
            class="text-primary-theme fw-500">
            Writing skills</a>; this section is approximately of 54-67&nbsp;​​ minutes.
        It evaluates your English Language proficiency in an academic environment..
    </div>
    <div class="mb-5 mb-md-0" style="text-align: justify;">
        <div class="fw-500 mt-0 mb-2 mb-md-4">
            The speaking module of the <a href="/" class="text-primary-theme fw-bold">PTE exam</a> will test you on how well
            you can listen, speak and write.
            Thus you need to be focused with utmost attention while reading, listening,
            writing and speaking the answers for the questions asked.
        </div>
        <div class="fw-500 mt-0 mb-2 mb-md-4">
            Your speaking proficiency will be judged by 5 different categories of questions
            that range from repeating the sentence given to answers the questions asked to summarizing the passages you
            listen.
        </div>
        <div class="fw-500 mt-0 mb-2 mb-md-4">
            The speaking section begins with Personal Introduction, here you are expected to introduce yourself, but this
            part of the tests is not assessed.
        </div>
        <div class="fw-500 mt-0 mb-2 mb-md-2">
            <strong>Alert</strong> : You must ensure that your response is recorded before the "progress bar"
            reaches to the end. Please note that if you stay silent for more than three seconds of time,
            the recording automatically stops and you will end up losing points.
        </div>
    </div>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
</template>

<style scoped lang="postcss"></style>