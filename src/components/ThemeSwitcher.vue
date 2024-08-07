<script lang="ts" setup>
// import { computed } from 'vue';
import { isDark, toggleDark } from '@/composables';

import { Sunny, Moon } from '@element-plus/icons-vue';

function toggleTheme() {
  toggleDark();
}
</script>

<template>
  <el-button
    :icon="!isDark ? Moon : Sunny"
    :circle="true"
    @click.prevent="toggleTheme"
  />
</template>
