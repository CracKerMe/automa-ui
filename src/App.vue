<script lang="ts" setup>
import { useUserStore } from '@/store/user';
import ReloadPrompt from '@/pwa/ReloadPrompt.vue';

const userStore = useUserStore();

userStore.initUser();
</script>
<template>
  <RouterView />
  <ReloadPrompt />
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
