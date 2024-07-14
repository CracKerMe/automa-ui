<template>
  <div
    class="drop-down"
    @mouseenter="enterDropdown"
    @mouseleave="leaveDropdown"
  >
    <slot name="trigger" />
    <div
      class="drop-down-box"
      v-show="showDrop"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showDrop = ref(false)

const enterDropdown = () => {
  showDrop.value = true
}

const leaveDropdown = () => {
  showDrop.value = false
}
</script>

<style>
.drop-down {
  position: relative;
}

.drop-down-box {
  position: absolute;
  animation: fadeinT 0.5s 1;
}

@keyframes fadeinT {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
