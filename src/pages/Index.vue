<script lang="ts" setup>
// import { useI18n } from 'vue-i18n';

import HeroPng from '@/assets/images/hero.png';
// const { t } = useI18n();
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center gap-y-2xl">
    <section
      class="w-full pt-12 lg:pt-28 pb-12 sm:pb-16 lg:pb-40 bg-gray-200 dark:bg-gray-800"
    >
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          class="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16"
        >
          <div class="text-center lg:text-left">
            <h1
              class="text-5xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj dark:text-gray-100"
            >
              Automate the work you do every day.
            </h1>
            <p
              class="mt-2 text-gray-600 sm:mt-8 font-inter text-2xl dark:text-gray-400"
            >
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
    <section
      class="w-full pt-12 lg:pt-28 pb-12 sm:pb-16 lg:pb-40 bg-gray-200 dark:bg-gray-800"
    >
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2>我是第二页的内容</h2>
        <router-link to="/contacts">
          <el-button color="#626aef">点我去导入联系人页面</el-button>
        </router-link>
      </div>
    </section>
    <section
      class="w-full pt-12 lg:pt-28 pb-12 sm:pb-16 lg:pb-40 bg-gray-200 dark:bg-gray-800"
    >
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2>我是第三页的内容</h2>
      </div>
    </section>
  </div>
</template>

<style lang="scss"></style>
