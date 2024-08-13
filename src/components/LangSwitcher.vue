<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useSystemStore } from '@/store/system';
const systemStore = useSystemStore();

const { availableLocales, locale } = useI18n();

const languageDropdownRef = ref();

const calcLocaleFn = (locale: string) => {
  switch (locale) {
    case 'en':
      return 'English';
    case 'zh-CN':
      return '中文';
    default:
      return locale;
  }
};

function setLanguage(_locale: string) {
  locale.value = _locale;
  languageDropdownRef.value.handleClose();
  systemStore.setLocale(_locale);
  localStorage.setItem('locale', _locale);
}

onMounted(() => {
  const _locale = localStorage.getItem('locale') || 'en';
  setLanguage(_locale);
});
</script>

<template>
  <el-dropdown
    ref="languageDropdownRef"
    placement="bottom"
    popper-class="language-dropdown"
  >
    <el-button :circle="true">
      <div i-carbon-language />
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="localeStr in availableLocales"
          :key="localeStr"
          :class="localeStr === locale ? 'active' : ''"
          @click.prevent="() => setLanguage(localeStr)"
        >
          {{ calcLocaleFn(localeStr) }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
:global(.language-dropdown .el-dropdown-menu__item.active) {
  color: #646cff;
  // background-color: #f0f3ff;
}
</style>
