<script lang="ts" setup>
// import { useI18n } from 'vue-i18n';
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';

import HeroPng from '@/assets/images/hero.png';
// const { t } = useI18n();
</script>

<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main class="main">
      <section class="pt-12 lg:pt-28 pb-12 sm:pb-16 lg:pb-40 bg-white">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div
            class="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16"
          >
            <div class="text-center lg:text-left">
              <h1
                class="text-5xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj"
              >
                Automate the work you do every day.
              </h1>
              <p class="mt-2 text-gray-600 sm:mt-8 font-inter text-2xl">
                Integrate applications and automate workflows across your
                organization.
              </p>
            </div>
            <div>
              <img
                class="w-full border border-white rounded rounded-2xl"
                :src="HeroPng"
                alt="home-hero"
              />
            </div>
          </div>
        </div>
      </section>
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
