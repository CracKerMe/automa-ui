<template>
  <div class="w-full h-[calc(100vh-80px)] flex overflow-hidden">
    <div
      class="w-[220px] bg-[#f8fafd] dark:bg-gray-8 p-5 flex-none h-full"
    ></div>
    <div class="flex-1 h-full p-5">
      <el-button class="p-2" @click="toggleRightPanel">
        toggle Right Panel
      </el-button>
      <!-- el 分割线 -->
      <el-divider />
      我是Fabric Editor This lib is free for everyone. Some things are not.
      People behind FabricJS acknowledge that Black people have to fight for
      basic rights, against systemic racism, unequal opportunities and injustice
      across the 🌎. We know this is wrong and we are 💔. 💪🏽💪🏾💪🏿!This lib is
      free for everyone. Some things are not. People behind FabricJS acknowledge
      that Black people have to fight for basic rights, against systemic racism,
      unequal opportunities and injustice across the 🌎. We know this is wrong
      and we are 💔. 💪🏽💪🏾💪🏿!This lib is free for everyone. Some things are not.
      People behind FabricJS acknowledge that Black people have to fight for
      basic rights, against systemic racism, unequal opportunities and injustice
      across the 🌎. We know this is wrong and we are 💔. 💪🏽💪🏾💪🏿!This lib is
      free for everyone. Some things are not. People behind FabricJS acknowledge
      that Black people have to fight for basic rights, against systemic racism,
      unequal opportunities and injustice across the 🌎. We know this is wrong
      and we are 💔. 💪🏽💪🏾💪🏿!This lib is free for everyone. Some things are not.
      People behind FabricJS acknowledge that Black people have to fight for
      basic rights, against systemic racism, unequal opportunities and injustice
      across the 🌎. We know this is wrong and we are 💔. 💪🏽💪🏾💪🏿!This lib is
      free for everyone. Some things are not. People behind FabricJS acknowledge
      that Black people have to fight for basic rights, against systemic racism,
      unequal opportunities and injustice across the 🌎. We know this is wrong
      and we are 💔. 💪🏽💪🏾💪🏿!
    </div>
    <div
      :class="`w-[300px] h-full bg-white dark:bg-black rounded-s-3xl transition-all p-5${rightPanelVisible ? ' shadow-2xl flex z-10' : ' w-0 !p-0 translate-x-[100%]'}`"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const rightPanelVisible = ref(false);
function toggleRightPanel() {
  rightPanelVisible.value = !rightPanelVisible.value;
}
</script>

<style lang="scss" scoped></style>
