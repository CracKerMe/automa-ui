<template>
  <div>
    <div class="overflow-hidden w-full">
      <div ref="green" class="box green" />
      <div ref="purple" class="box purple" />
      <div ref="blue" class="box blue" />
    </div>
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
import { Draggable } from 'gsap/Draggable';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(
  ScrollTrigger,
  Draggable,
  Flip,
  Observer,
  ScrollToPlugin,
  MotionPathPlugin,
);
const green = ref(null);
const purple = ref(null);
const blue = ref(null);
onMounted(() => {
  gsap.to(green.value, { rotation: 360, x: 400, duration: 1 });
  gsap.from(purple.value, { rotation: -360, x: -100, duration: 1 });
  gsap.fromTo(blue.value, { x: -100 }, { rotation: 360, x: 500, duration: 1 });

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
  width: 75px;
  height: 75px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #28a92b;
  font-weight: 600;
  color: var(--light);
}

.purple {
  background-color: #8d3dae;
}

.blue {
  background-color: #2c7ad2;
}

.green {
  background-color: #28a92b;
}

.my-container {
  overscroll-behavior: none;
  width: 500%;
  display: flex;
  flex-wrap: nowrap;
}
</style>
