<template>
  <div>
    <div class="box"></div>
    <div class="h-screen bg-coolgray">
      继续往下滚动，我会强制页面横向滚动 预览所有的内容！
    </div>
    <div class="w-full overflow-hidden">
      <div class="my-container h-screen pt-[80px]">
        <section class="panel w-full h-full bg-red">ONE</section>
        <section class="panel w-full h-full bg-orange">TWO</section>
        <section class="panel w-full h-full bg-purple">THREE</section>
        <section class="panel w-full h-full bg-green">FOUR</section>
        <section class="panel w-full h-full bg-amber">FIVE</section>
      </div>
    </div>
    <div class="h-screen bg-coolgray">恭喜你看完了</div>
    <div class="h-screen bg-blue">向上滚动可以再看一遍</div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, MotionPathPlugin);

onMounted(() => {
  gsap.to('.box', {
    scrollTrigger: '.box', // start animation when ".box" enters the viewport
    x: 500,
  });

  let sections = gsap.utils.toArray('.panel');
  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.my-container',
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: '+=3500',
    },
  });
});
</script>

<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: rgba(255, 0, 0, 0.2);
}

.my-container {
  overscroll-behavior: none;
  width: 500%;
  display: flex;
  flex-wrap: nowrap;
}
</style>
