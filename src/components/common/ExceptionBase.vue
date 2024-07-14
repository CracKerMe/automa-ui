<template>
  <div class="flex justify-center items-center flex-col w-full h-full">
    <div class="w-[400px] text-primary">
      <img v-if="type === '403'" :src="Icon403" />
      <img v-if="type === '404'" :src="Icon404" />
      <img v-if="type === '500'" :src="Icon500" />
    </div>
    <router-link to="/">
      <el-button type="primary"> 回到首页 </el-button>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import Icon403 from '@/assets/svg/403.svg';
import Icon404 from '@/assets/svg/404.svg';
import Icon500 from '@/assets/svg/500.svg';
type ExceptionType = '403' | '404' | '500';
interface Props {
  /** 异常类型 403 404 500 */
  type: ExceptionType;
}
defineProps<Props>();
</script>

<style scoped>
img {
  width: 400px;
  color: #1890ff;
}
</style>
