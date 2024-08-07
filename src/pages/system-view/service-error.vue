<template>
  <div class="w-full h-[calc(100vh-120px)] flex items-center justify-center">
    <div
      class="w-full p-16px bg-[#f6f9f8] dark:bg-[#101014] transition duration-300 ease-in-out"
    >
      <div class="flex justify-center items-center flex-col w-full h-full">
        <ExceptionBase type="500" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExceptionBase from '@/components/common/ExceptionBase.vue';
</script>

<style scoped></style>
