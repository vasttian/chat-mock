<template>
  <div class="chatapp">
    <!-- <router-view></router-view> -->
    <thread-section></thread-section>
    <message-section></message-section>
  </div>
</template>

<script>
  import ThreadSection from './components/ThreadSection.vue';
  import MessageSection from './components/MessageSection.vue';
  
  export default {
    name: 'app',
    components: {
      ThreadSection,
      MessageSection,
    },
  };
</script>

<style src="./css/chat.css"></style>
