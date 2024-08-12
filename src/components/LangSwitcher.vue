<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { availableLocales, locale } = useI18n();

const languageDropdownRef = ref();

// function toggleLocales() {
//   // change to some real logic
//   const locales = availableLocales;
//   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
// }

function setLanguage(_locale: string) {
  locale.value = _locale;
  languageDropdownRef.value.handleClose();
}
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
          {{ localeStr }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
:global(.language-dropdown .el-dropdown-menu__item.active) {
  color: #646cff;
  background-color: #f0f3ff;
}
</style>
