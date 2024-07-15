<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const year = ref(new Date().getFullYear());
</script>
<template>
  <div
    class="footer w-full flex justify-center items-center text-primary-dark dark:text-ternary-light"
  >
    @{{ year }}
    <a
      class="link__item underline"
      href="https://github.com/yugasun/vue-template"
      target="_blank"
    >
      Github
    </a>
    <span class="p-2"> | </span>
    <a
      class="link__item underline"
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite {{ t('common.docs') }}
    </a>
    <span class="p-2"> | </span>
    <a class="link__item underline" href="https://v3.vuejs.org/" target="_blank"
      >Vue3 {{ t('common.docs') }}</a
    >
  </div>
</template>
<style lang="scss" scoped>
.footer {
  height: 40px;
  line-height: 40px;
  font-size: 16px;

  .link__item {
    color: var(--el-color-primary);
  }
}
</style>
