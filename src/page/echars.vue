<template>
  <div class="login">
    <div id="echarts" :style="{ width: '500px', height: '500px' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    var dom = document.getElementById("echarts");
    var myChart = this.echarts.init(dom);
    // 绘制图表
    myChart.setOption({
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          data: [
            {
              value: 235,
              name: "单身",
            },
            {
              value: 274,
              name: "结婚",
            },
            {
              value: 300,
              name: "恋爱",
            },
            {
              value: 335,
              name: "孤独",
            },
            {
              value: 400,
              name: "无子",
            },
          ],
        },
      ],
    });
  },
};
</script>
