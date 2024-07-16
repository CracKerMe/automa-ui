<template>
  <svg aria-hidden="true" :class="$props.className">
    <use
      :class="`svg-icon ${$props.className}`"
      :xlink:href="symbolId"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'currentColor',
  },
  className: {
    type: String,
    default: '',
  },
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style scoped>
.svg-icon {
  width: 100%;
  height: 100%;
  fill: currentColor;
  overflow: hidden;
}
</style>
