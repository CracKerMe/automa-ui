<template>
  <div
    class="drop-down"
    @mouseenter="enterDropdown"
    @mouseleave="leaveDropdown"
  >
    <slot name="trigger" />
    <div v-show="showDrop" class="drop-down-box">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showDrop = ref(false);

const enterDropdown = () => {
  showDrop.value = true;
};

const leaveDropdown = () => {
  showDrop.value = false;
};
</script>

<style>
.drop-down {
  position: relative;
}

.drop-down-box {
  position: absolute;
  animation: fade-in-t 0.5s 1;
}

@keyframes fade-in-t {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
