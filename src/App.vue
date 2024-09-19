<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import en from 'element-plus/dist/locale/en.mjs';

import { useUserStore } from '@/store/user';
import { useSystemStore } from '@/store/system';
import ReloadPrompt from '@/pwa/ReloadPrompt.vue';

import Header from '@/components/shared/Header.vue';

const userStore = useUserStore();
const systemStore = useSystemStore();
const locale = computed(() => (systemStore.locale === 'zh-CN' ? zhCn : en));
userStore.initUser();
systemStore.initLocale();

onMounted(() => {
  if (!/iPhone|iPad|Macintosh/i.test(navigator.userAgent)) {
    document.documentElement.classList.add('is-not-safari');
  }
});
</script>
<template>
  <ElConfigProvider :locale="locale">
    <el-container class="pt-[80px]">
      <div
        class="fixed top-0 w-full h-[80px] left-0 z-10 shadow-lg flex items-center justify-between custom-header"
      >
        <Header />
      </div>
      <el-main class="!p-0">
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
    </el-container>
    <ReloadPrompt />
  </ElConfigProvider>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.main {
  height: calc(100vh - 80px);
}

.custom-header {
  background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(8px);
  -webkit-backdrop-filter: saturate(50%) blur(8px);
}
</style>
