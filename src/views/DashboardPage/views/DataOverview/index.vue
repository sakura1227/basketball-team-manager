<template>
  <main class="over-view">
    <!-- 文字说明 -->
    <section class="title-info">
      <div class="left-info">
        <p class="info-title">
          Dashboard
        </p>
        <p class="info-p">
          欢迎来到篮球管理系统
        </p>
      </div>
      <div class="right-filter">
        <div class="time-picker-box">
          <el-date-picker type="daterange" range-separator="To" start-placeholder="起始日期" end-placeholder="截止日期" />
        </div>
      </div>
    </section>
    <!-- 卡片组 -->
    <div class="card-group">
      <!-- 单独卡片 -->
      <div class="data-card">
        <div class="card-left-icon">
          <el-icon>
            <Flag />
          </el-icon>
        </div>
        <div class="card-right-info">
          <p class="info-title">
            {{ 6 }}支队伍
          </p>
          <p class="info-p">
            队伍数
          </p>
        </div>
      </div>
      <div class="data-card">
        <div class="card-left-icon">
          <el-icon>
            <User />
          </el-icon>
        </div>
        <div class="card-right-info">
          <p class="info-title">
            {{ 20 }}名球员
          </p>
          <p class="info-p">
            球员人数
          </p>
        </div>
      </div>
      <div class="data-card">
        <div class="card-left-icon">
          <el-icon>
            <Histogram />
          </el-icon>
        </div>
        <div class="card-right-info">
          <p class="info-title">
            {{ 5 }}个训练计划
          </p>
          <p class="info-p">
            训练计划
          </p>
        </div>
      </div>
      <div class="data-card">
        <div class="card-left-icon">
          <el-icon>
            <List />
          </el-icon>
        </div>
        <div class="card-right-info">
          <p class="info-title">
            {{ 10 }}次训练
          </p>
          <p class="info-p">
            训练次数
          </p>
        </div>
      </div>
    </div>
    <!-- 图表组 -->
    <div class="chart-group">
      <!-- 训练计划分布 -->
      <div class="chat-item">
        <!-- 头部 -->
        <section class="title-info">
          <div class="left-info">
            <p class="info-title">
              训练计划分布
            </p>
            <p class="info-p">
              总览训练计划分布
            </p>
          </div>
          <div class="right-filter">
            <div class="filter-wrap">
              <div class="filter-item filter-item-active">
                Monthly
              </div>
              <div class="filter-item">
                Weekly
              </div>
              <div class="filter-item">
                Today
              </div>
            </div>
          </div>
        </section>
        <!-- 方块字段 -->
        <div class="chat-item-info-box">
          <div class="chat-item-info">
            <p class="info-title">
              {{ 6 }}次
            </p>
            <p class="info-p">
              体能训练
            </p>
          </div>
          <div class="chat-item-info">
            <p class="info-title">
              {{ 6 }}次
            </p>
            <p class="info-p">
              专项训练
            </p>
          </div>
          <div class="chat-item-info">
            <p class="info-title">
              {{ 6 }}次
            </p>
            <p class="info-p">
              训练赛
            </p>
          </div>
        </div>
        <!-- 图表字段 -->
        <div class="chat-item-box">
          <!-- 左侧饼图 -->
          <div class="chat-item-left-chat" ref="chart1">
          </div>
          <!-- 右侧柱状图 -->
          <div class="chat-item-right-chat" ref="chart2">
          </div>
        </div>
      </div>
      <!-- 训练数据 -->
      <div class="chat-item">
        <section class="title-info">
          <div class="left-info">
            <p class="info-title">
              训练数据
            </p>
            <p class="info-p">
              训练数据预览
            </p>
          </div>
          <div class="right-filter">
            <div class="filter-wrap">
              <div class="filter-item filter-item-active">
                Monthly
              </div>
              <div class="filter-item">
                Weekly
              </div>
              <div class="filter-item">
                Today
              </div>
            </div>
          </div>
        </section>
        <!-- 图表字段 -->
        <div class="chat-item-box-2" ref="chart3">

        </div>
      </div>
    </div>
    <!-- 底部图 -->
    <div class="buttom-chat-group">
      <div class="bar-chat">
        <section class="title-info">
          <div class="left-info">
            <p class="info-title">
              训练监控
            </p>
            <p class="info-p">
              训练监控数据预览
            </p>
          </div>
          <div class="right-filter">
            <div class="filter-wrap">
              <div class="filter-item filter-item-active">
                Monthly
              </div>
              <div class="filter-item">
                Weekly
              </div>
              <div class="filter-item">
                Today
              </div>
            </div>
          </div>
        </section>
        <div class="chat-item-box" ref="chart4">
        </div>
      </div>
      <div class="more-info-card">
        <div class="more-info-box">
          <p class="more-info-item">
            111111
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive, onMounted } from 'vue'
import * as echarts from 'echarts'
import {
  User, Histogram, List, Flag
} from '@element-plus/icons-vue'
type EChartsOption = echarts.EChartsOption
//左上角饼图和柱状图
//饼图
const chart1 = ref()
let chartInstance1: echarts.ECharts
const chartOption1 = reactive<EChartsOption>({
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      name: '百分比',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '体能训练' },
        { value: 735, name: '专项训练' },
        { value: 580, name: '训练赛' },
      ]
    }
  ]
})
onMounted(() => {
  chartInstance1 = echarts.init(chart1.value)
  chartInstance1.setOption(chartOption1)
})
// 柱状图
const chart2 = ref()
let chartInstance2: echarts.ECharts
const chartOption2 = reactive<EChartsOption>({
  tooltip: {
    trigger: 'item'
  },
  grid: {
    top: "10px",
    left: "0px",
    right: "15px",
    bottom: "0px",
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['体能训练', '专项训练', '训练赛'],
    show: false
  },
  series: [
    {
      data: [
        {
          value: 1048,
          itemStyle: {
            color: '#c23531'
          }
        },
        {
          value: 735,
          itemStyle: {
            color: '#2f4554'
          }
        },
        {
          value: 580,
          itemStyle: {
            color: '#61a0a8'
          }
        },

      ],
      type: 'bar',
      barGap: '20%',

    }
  ]
})
onMounted(() => {
  chartInstance2 = echarts.init(chart2.value)
  chartInstance2.setOption(chartOption2)
})
const chart3 = ref()
let chartInstance3: echarts.ECharts
const chartOption3 = reactive<EChartsOption>(
  {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Line 1',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)'
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [140, 232, 101, 264, 90, 340, 250]
      },
      {
        name: 'Line 2',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(0, 221, 255)'
            },
            {
              offset: 1,
              color: 'rgb(77, 119, 255)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 282, 111, 234, 220, 340, 310]
      },
      {
        name: 'Line 3',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(55, 162, 255)'
            },
            {
              offset: 1,
              color: 'rgb(116, 21, 219)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 132, 201, 334, 190, 130, 220]
      },
      {
        name: 'Line 4',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 0, 135)'
            },
            {
              offset: 1,
              color: 'rgb(135, 0, 157)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 402, 231, 134, 190, 230, 120]
      },
      {
        name: 'Line 5',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 191, 0)'
            },
            {
              offset: 1,
              color: 'rgb(224, 62, 76)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 302, 181, 234, 210, 290, 150]
      }
    ]
  }
)
onMounted(() => {
  chartInstance3 = echarts.init(chart3.value)
  chartInstance3.setOption(chartOption3)
})
const chart4 = ref()
let chartInstance4: echarts.ECharts
const dataAxis = ['投篮', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放']
const data = ref([220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220])
const chartOption4 =
{
  grid: {
    top: "10px",
    left: '2%',
    right: '2%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    data: dataAxis,
    type: "category",
    axisLabel: { interval: 0, rotate: 20 },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#999'
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      },

      data: data.value,
    }
  ]
}
onMounted(() => {
  const zoomSize = 4
  chartInstance4 = echarts.init(chart4.value)
  chartInstance4.on('click', function (params) {
    chartInstance4.dispatchAction({
      type: 'dataZoom',
      startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      endValue:
        dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.value.length - 1)]
    });
  })
  chartInstance4.setOption(chartOption4)
})
//右侧面积图

//下部住柱状图
</script>
 
<style scoped lang="less">
.over-view {
  min-height: 600px;
  padding: 40px 30px;
  padding-bottom: 100px;

  .title-info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-info {
      .info-title {
        font-size: 20px;
        font-weight: 600;
      }

      .info-p {
        color: #969BA0;
      }
    }
  }

  .card-group {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;

    .data-card {
      width: 280px;
      height: 150px;
      background-color: #fff;
      border-radius: 5%;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .25);
      display: flex;
      align-items: center;
      position: relative;

      .card-left-icon {
        background: #E9ECFF;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        margin: 0 30px;
        margin-right: 20px;
        color: #2F4CDD;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card-right-info {
        .info-title {
          font-size: 20px;
          font-weight: 600;
        }

        .info-p {
          color: #969BA0;
        }
      }
    }
  }

  .chart-group {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;

    .chat-item {
      width: 610px;
      height: 400px;
      background-color: #fff;
      border-radius: 5%;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .25);
      box-sizing: border-box;
      padding: 40px 30px;

      .title-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left-info {
          .info-title {
            font-size: 20px;
            font-weight: 600;
          }

          .info-p {
            color: #969BA0;
          }
        }

        .right-filter {
          .filter-wrap {
            height: 50px;
            background: #F4F5F9;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-around;

            .filter-item {
              height: 30px;
              line-height: 30px;
              flex: 1;
              text-align: center;
              margin: 0 10px;
              border-radius: 4px;
              padding: 2px 16px;
              color: rgba(0, 0, 0, 0.6);
              cursor: pointer;
            }

            .filter-item-active {
              background: #fff;
              box-shadow: 0 1px 0 rgb(0 0 0 / 10%), 0 0 0 1px rgb(0 0 0 / 2%),
                0 5px 10px rgb(0 0 0 / 15%);
              color: #000;
            }
          }
        }
      }

      .chat-item-info-box {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        align-items: center;

        .chat-item-info {
          width: 170px;
          height: 80px;
          background-color: #fff;
          border-radius: 5%;
          border: 1px solid #F2F2F2;
          box-sizing: border-box;
          padding: 10;
          box-sizing: border-box;
          padding: 15px 0 0px 20px;

          .info-title {
            font-size: 20px;
            font-weight: 600;
          }

          .info-p {
            color: #969BA0;
          }
        }
      }

      .chat-item-box {
        margin-top: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .chat-item-left-chat {
          height: 175px;
          width: 40%;
        }

        .chat-item-right-chat {
          height: 175px;
          width: 60%;
        }
      }

      .chat-item-box-2 {
        margin-top: 20px;
        box-sizing: border-box;
        height: 270px;
        width: 100%;
      }
    }

  }

  .buttom-chat-group {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;

    .bar-chat,
    .more-info-card {
      box-sizing: border-box;
      width: 70%;
      min-height: 400px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .25);
      padding: 40px 30px;
      padding-bottom: 30px;

      .title-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left-info {
          .info-title {
            font-size: 20px;
            font-weight: 600;
          }

          .info-p {
            color: #969BA0;
          }
        }

        .right-filter {
          .filter-wrap {
            height: 50px;
            background: #F4F5F9;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-around;

            .filter-item {
              height: 30px;
              line-height: 30px;
              flex: 1;
              text-align: center;
              margin: 0 10px;
              border-radius: 4px;
              padding: 2px 16px;
              color: rgba(0, 0, 0, 0.6);
              cursor: pointer;
            }

            .filter-item-active {
              background: #fff;
              box-shadow: 0 1px 0 rgb(0 0 0 / 10%), 0 0 0 1px rgb(0 0 0 / 2%),
                0 5px 10px rgb(0 0 0 / 15%);
              color: #000;
            }
          }
        }
      }

      .chat-item-box {
        margin-top: 20px;
        box-sizing: border-box;
        height: 270px;
        width: 100%;
      }
    }

    .more-info-card {
      width: 28%;
      padding: 40px 30px;
      padding-bottom: 30px;
      min-height: 410px;
      background-color: #3E4954;
      background-image: url("./imgs/Vector.png");
      background-repeat: no-repeat;
      background-position: 150% -35%;

      .more-info-box {
        margin-top: 20px;
        box-sizing: border-box;
        height: 320px;
        width: 100%;
        .more-info-item{
          color: #fff;
        }
      }
    }

  }
}
</style>