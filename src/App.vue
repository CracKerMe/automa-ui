<script lang="ts" setup>
import { useUserStore } from '@/store/user';
import ReloadPrompt from '@/pwa/ReloadPrompt.vue';

import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';

const userStore = useUserStore();

userStore.initUser();

onMounted(() => {
  if (!/iPhone|iPad|Macintosh/i.test(navigator.userAgent)) {
    document.documentElement.classList.add('is-not-safari');
  }
});
</script>
<template>
  <el-container class="pt-[80px]">
    <div
      class="fixed top-0 w-full h-[80px] left-0 z-10 shadow-lg flex items-center justify-between custom-header"
    >
      <Header />
    </div>
    <el-main class="main relative">
      <div
        class="hidden dark:block bg-video fixed left-0 top-0 -z-1 w-full h-screen"
      >
        <video
          class="w-[101%] h-[101%] object-cover absolute -my-[1px]"
          autoplay
          loop
          muted
          playsinline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      <RouterView />
    </el-main>
    <el-footer style="--el-footer-height: 40px">
      <Footer />
    </el-footer>
  </el-container>
  <ReloadPrompt />
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.main {
  min-height: calc(100vh - 100px);
}

.custom-header {
  background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(8px);
  -webkit-backdrop-filter: saturate(50%) blur(8px);
}
</style>
