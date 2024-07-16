<script lang="ts" setup>
// import { useI18n } from 'vue-i18n';
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';

import { ref, onMounted } from 'vue';
import echarts from 'echarts';
import 'echarts-gl';
import axios from 'axios';
import { ElNotification } from 'element-plus';

const echartsTipsRef = ref();
const boxRef = ref();
// const { t } = useI18n();
function mathSum(m: number, n: number) {
  const num = Math.floor(Math.random() * (m - n) + n);
  return num;
}

const chart = ref();
onMounted(() => {
  getData();
});
const getData = async () => {
  var ROOT_PATH = 'https://geo.datav.aliyun.com';
  await axios
    .get(ROOT_PATH + '/areas_v3/bound/310000_full.json')
    .then((res) => {
      // console.log('res-->', res.data)
      init(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const init = (data: any) => {
  let result = data.features.map((item: any) => {
    let val = mathSum(800, 50000);
    return {
      name: item.properties.name,
      value: val,
    };
  });
  var myChart = echarts.init(chart.value);
  echarts.registerMap('sh', data);
  var option = {
    title: {
      text: '上海会员总数',
    },
    series: [
      {
        data: result,
        tooltip: {
          formatter: function (params: any) {
            return params.name + ' : ' + params.value;
          },
          trigger: 'item',
        },
        grid: {
          left: '4%',
          right: '4%',
          top: '1%',
          bottom: '1%',
          show: true,
          backgroundColor: '#000',
        },
        type: 'map',
        map: 'sh',
        aspectScale: 1,
        layoutCenter: ['56%', '40%'], //地图位置
        layoutSize: '140%',
        label: {
          normal: {
            show: true,
            fontSize: '11',
            color: '#FEFEFE',
          },
          emphasis: {
            show: true,
            fontSize: '14',
            color: '#FEFEFE',
          },
        },
        itemStyle: {
          normal: {
            borderColor: 'rgba(0,0,0, 0.6)',
            borderWidth: 0.8,
            areaColor: {
              type: 'linear-gradient',
              x: 0,
              y: 300,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: '#0250b5', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#022e75',
                },
              ],
              global: true, // 缺省为 false
            },
          },
          emphasis: {
            shadowColor: 'rgba(0, 0, 0, 1)',
            shadowBlur: 20,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            areaColor: {
              type: 'linear-gradient',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#53ecfe', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#026ffe',
                },
              ],
            },
          },
        },
        groundplane: {
          show: false,
        },
      },
    ],
    geo: {
      map: 'area',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      aspectScale: 0.9,
      layoutCenter: ['50%', '52.5%'], //地图位置
      layoutSize: '110%',
      itemStyle: {
        normal: {
          shadowColor: '#80d5fa',
          shadowBlur: 5,
          color: '#082A52',
        },
        emphasis: {
          areaColor: '#082A52',
        },
      },
      z: 2,
    },
    // visualMap: {
    //   min: 0,
    //   max: 100,
    //   right: '90%',
    //   text: ['高', '低'], // 文本，默认为数值文本
    //   calculable: true,
    //   show: true,
    //   inRange: {
    //     //颜色数组
    //     color: [
    //       'rgba(1,60,128,1)',
    //       'rgba(3,120,204,1)',
    //       'rgba(1,128,236,1)',
    //       'rgba(3,115,240,1)',
    //       'rgba(1,190,239,1)',
    //       'rgba(213,141,56,1)',
    //       'rgba(212,177,66,1)',
    //     ],
    //   },
    // },
  };
  myChart.setOption(option);
  myChart.on('click', (params: any) => {
    console.log(params);
    ElNotification({
      title: '点击了',
      message: JSON.stringify(params.data),
    });
    console.log(boxRef);
    echartsTipsRef.value.style.left =
      params.event.event.screenX - boxRef.value.offsetLeft + 'px';
    echartsTipsRef.value.style.top =
      params.event.event.screenY -
      getDistanceToTop(boxRef.value) -
      boxRef.value.offsetTop +
      document.documentElement.scrollTop +
      'px';
    setTimeout(() => {
      echartsTipsRef.value.style.display = 'block';
    }, 100);
  });

  document.addEventListener('click', (e) => {
    if (
      e.target === echartsTipsRef.value ||
      echartsTipsRef.value?.contains(e.target as Node)
    ) {
      return;
    }
    echartsTipsRef.value.style.display = 'none';
  });

  window.addEventListener('resize', () => {
    console.log('resize');
    myChart.resize();
    echartsTipsRef.value.style.display = 'none';
  });
};

function getDistanceToTop(element: HTMLElement) {
  let distance = 0;
  while (element) {
    distance += element.offsetTop;
    element = element.offsetParent as HTMLElement;
  }
  return distance;
}
</script>

<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main class="main">
      <div ref="boxRef" class="relative">
        <div id="main" ref="chart" class="echarts-box"></div>
        <div
          ref="echartsTipsRef"
          class="absolute echarts-detail-data"
          style="display: none"
        >
          <h2>我是浦东新区</h2>
        </div>
      </div>
      <!-- <img alt="Vue logo" src="@/assets/images/logo.png" class="w-30" /> -->
    </el-main>
    <el-footer style="--el-footer-height: 40px">
      <Footer />
    </el-footer>
  </el-container>
</template>

<style lang="scss">
.main {
  min-height: calc(100vh - 100px);
}

.echarts-box {
  height: 900px;
  border: 1px solid var(--el-border-color-base);
  border-radius: 4px;
  box-shadow: var(--el-box-shadow-light);
  padding: 20px 20px 50px;
}

.echarts-detail-data {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 300px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  z-index: 99;
}
</style>
