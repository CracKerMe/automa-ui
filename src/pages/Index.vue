<script lang="ts" setup>
// import { useI18n } from 'vue-i18n';
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';

// const { t } = useI18n();
</script>

<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main class="main">
      <!-- <img alt="Vue logo" src="@/assets/images/logo.png" class="w-30" /> -->
    </el-main>
    <el-footer style="--el-footer-height: 40px">
      <Footer />
    </el-footer>
  </el-container>
</template>

<style lang="scss">
.main {
  min-height: calc(100vh - 100px);
}
</style>
