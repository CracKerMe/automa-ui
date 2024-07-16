<template>
  <div class="flex justify-center items-center flex-col w-full h-full">
    <div class="text-primary mb-10">
      <SvgIcon
        v-if="type === '403'"
        name="403"
        class-name="w-[400px] h-[400px]"
        style="color: var(--el-color-primary)"
      />
      <SvgIcon
        v-if="type === '404'"
        name="404"
        class-name="w-[400px] h-[400px]"
        style="color: var(--el-color-primary)"
      />
      <SvgIcon
        v-if="type === '500'"
        name="500"
        class-name="w-[400px] h-[400px]"
        style="color: var(--el-color-primary)"
      />
    </div>
    <router-link to="/">
      <el-button type="primary" size="large"> 回到首页 </el-button>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
// import ids from 'virtual:svg-icons-names';
import SvgIcon from './SvgIcon.vue';
// import Icon403 from '@/assets/svg/403.svg';
// import Icon404 from '@/assets/svg/404.svg';
// import Icon500 from '@/assets/svg/500.svg';
type ExceptionType = '403' | '404' | '500';
interface Props {
  /** 异常类型 403 404 500 */
  type: ExceptionType;
}
// console.log('ids', ids);
defineProps<Props>();
</script>
