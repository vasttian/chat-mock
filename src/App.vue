<template>
  <div class="chatapp">
    <!-- <router-view></router-view> -->
    <thread-section></thread-section>
  </div>
</template>

<script>
  import ThreadSection from './components/ThreadSection.vue';
  export default {
    name: 'app',
    components: {
      ThreadSection,
    }
  };
</script>

<style src="./css/chat.css"></style>
