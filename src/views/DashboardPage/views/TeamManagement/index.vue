<template>
  <main class="team-manage">
    <!-- 文字说明 -->
    <section class="title-info">
      <div class="left-info">
        <p class="info-title">
          队伍管理
        </p>
        <p class="info-p">
          在此可查看球员信息和管理球员
        </p>
      </div>
      <!-- 在这可设置添加新球员信息等 -->
      <div class="right-filter">
        <div>
        </div>
      </div>
    </section>
    <!-- 球员信息 -->
    <div class="team-info-box">
      <!-- 左侧球员列表 -->
      <div class="team-list">
        <!-- 标题选择器 -->
        <div class="title-info">
          <div class="left-info">
            <p class="info-title">
              信息管理
            </p>
            <p class="info-p">
              球员信息
            </p>
          </div>
          <div class="right-filter">
            <div class="filter-wrap">
              <div class="filter-item filter-item-active">
                球员信息
              </div>
              <div class="filter-item">
                球队信息
              </div>
            </div>
          </div>
        </div>
        <!-- 数据表 -->
        <div class="info-list-table" v-if="true">
          <el-table :data="tableData" height="430" :border="true" style="width: 100%">
            <el-table-column type="expand">
              <template #default="props">
                <div m="4">
                  <p m="t-0 b-2">State: {{ props.row.state }}</p>
                  <p m="t-0 b-2">City: {{ props.row.city }}</p>
                  <p m="t-0 b-2">Address: {{ props.row.address }}</p>
                  <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
                  <h3>Family</h3>
                  <el-table :data="props.row.family" :border="true">
                    <el-table-column label="Name" prop="name" />
                    <el-table-column label="State" prop="state" />
                    <el-table-column label="City" prop="city" />
                    <el-table-column label="Address" prop="address" />
                    <el-table-column label="Zip" prop="zip" />
                  </el-table>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="Date" prop="date" />
            <el-table-column label="Name" prop="name" />
          </el-table>
        </div>
        <!-- 球队数据表 -->
        <div class="info-list-table" v-if="false">
          <el-table :data="tableData" height="430" style="width: 100%">
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="120" />
            <el-table-column prop="address" label="Address" width="450" />
            <el-table-column prop="zip" label="Zip" width="120" />
            <el-table-column fixed="right" label="Operations" width="120">
              <template #default>
                <el-button link type="primary" size="small">Detail</el-button>
                <el-button link type="primary" size="small">Edit</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 右侧信息 -->
      <div class="team-palyer-info">
        <!-- 球员信息 -->
        <div class="player-detail-info">
          <!-- 上部 -->
          <div class="top-detail">
            <!-- 球员信息 -->
            <div class="top-left-info">
              <div class="info-item">
                &nbsp;&nbsp;&nbsp;姓名：LILI
              </div>
              <div class="info-item">
                &nbsp;&nbsp;&nbsp;年龄：18
              </div>
              <div class="info-item">
                &nbsp;&nbsp;&nbsp;位置：前锋
              </div>
              <div class="info-item">
                &nbsp;&nbsp;&nbsp;评分：9
              </div>
              <div class="info-item">
                &nbsp;&nbsp;&nbsp;评分：9
              </div>
              <div class="info-item">
                &nbsp;&nbsp;&nbsp;评分：9
              </div>
              <div class="info-item">
                &nbsp;&nbsp;&nbsp;评分：9
              </div>
              <div class="info-item">
                &nbsp;&nbsp;&nbsp;评分：9
              </div>
              <div class="info-item">
                &nbsp;&nbsp;&nbsp;评分：9
              </div>
            </div>
            <div class="top-right-info" ref="rightTopChart"></div>
            <!-- 雷达图 -->
          </div>
          <!-- 下部 -->
          <div class="buttom-detail" ref="graphRef">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive, onMounted } from 'vue'
import * as echarts from 'echarts'
import { Graph, Node, Edge, Shape } from '@antv/x6'

//左侧表
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'San Francisco',
    address: '3650 21st St, San Francisco',
    zip: 'CA 94114',
    family: [
      {
        name: 'Jerry',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Spike',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
      {
        name: 'Tyke',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
      },
    ],
  },
]
// 右侧上图
type EChartsOption = echarts.EChartsOption
const rightTopChart = ref()
let rightTopChartInstance: echarts.ECharts
const rightTopChartOption = reactive<EChartsOption>(
  {
    tooltip: {
      trigger: 'item'
    },
    radar: {
      shape: 'circle',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending'
          }
        ]
      }
    ]
  }
)
onMounted(() => {
  rightTopChartInstance = echarts.init(rightTopChart.value)
  rightTopChartInstance.setOption(rightTopChartOption)
})
// 下部图
const data = {
  "nodes": [
    {
      "id": 69,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "fathers"
          }
        }
      },
      "x": 35,
      "y": 97
    },
    {
      "id": 70,
      "shape": "tree-node",
      "width": 28,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "0"
          }
        }
      },
      "x": 184,
      "y": 97
    },
    {
      "id": 71,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "id"
          }
        }
      },
      "x": 333,
      "y": 13
    },
    {
      "id": 72,
      "shape": "tree-node",
      "width": 28,
      "height": 26,
      "leaf": true,
      "attrs": {
        "label": {
          "textWrap": {
            "text": 0
          }
        }
      },
      "x": 503,
      "y": 13
    },
    {
      "id": 73,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "married"
          }
        }
      },
      "x": 333,
      "y": 69
    },
    {
      "id": 74,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": true,
      "attrs": {
        "label": {
          "textWrap": {
            "text": false
          }
        }
      },
      "x": 503,
      "y": 69
    },
    {
      "id": 75,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "name"
          }
        }
      },
      "x": 333,
      "y": 125
    },
    {
      "id": 76,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": true,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "Eric Taylor"
          }
        }
      },
      "x": 503,
      "y": 125
    },
    {
      "id": 77,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "daughters"
          }
        }
      },
      "x": 333,
      "y": 405
    },
    {
      "id": 78,
      "shape": "tree-node",
      "width": 28,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "0"
          }
        }
      },
      "x": 503,
      "y": 181
    },
    {
      "id": 79,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "age"
          }
        }
      },
      "x": 673,
      "y": 153
    },
    {
      "id": 80,
      "shape": "tree-node",
      "width": 28,
      "height": 26,
      "leaf": true,
      "attrs": {
        "label": {
          "textWrap": {
            "text": 30
          }
        }
      },
      "x": 843,
      "y": 153
    },
    {
      "id": 81,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "name"
          }
        }
      },
      "x": 673,
      "y": 209
    },
    {
      "id": 82,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": true,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "Sarah"
          }
        }
      },
      "x": 843,
      "y": 209
    },
    {
      "id": 83,
      "shape": "tree-node",
      "width": 28,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "1"
          }
        }
      },
      "x": 503,
      "y": 293
    },
    {
      "id": 84,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "age"
          }
        }
      },
      "x": 673,
      "y": 265
    },
    {
      "id": 85,
      "shape": "tree-node",
      "width": 28,
      "height": 26,
      "leaf": true,
      "attrs": {
        "label": {
          "textWrap": {
            "text": 6
          }
        }
      },
      "x": 843,
      "y": 265
    },
    {
      "id": 86,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "name"
          }
        }
      },
      "x": 673,
      "y": 321
    },
    {
      "id": 87,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": true,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "Cynthia"
          }
        }
      },
      "x": 843,
      "y": 321
    },
    {
      "id": 88,
      "shape": "tree-node",
      "width": 28,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "2"
          }
        }
      },
      "x": 503,
      "y": 405
    },
    {
      "id": 89,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "age"
          }
        }
      },
      "x": 673,
      "y": 377
    },
    {
      "id": 90,
      "shape": "tree-node",
      "width": 28,
      "height": 26,
      "leaf": true,
      "attrs": {
        "label": {
          "textWrap": {
            "text": 15
          }
        }
      },
      "x": 843,
      "y": 377
    },
    {
      "id": 91,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "name"
          }
        }
      },
      "x": 673,
      "y": 433
    },
    {
      "id": 92,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": true,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "Linda"
          }
        }
      },
      "x": 843,
      "y": 433
    },
    {
      "id": 93,
      "shape": "tree-node",
      "width": 28,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "3"
          }
        }
      },
      "x": 503,
      "y": 517
    },
    {
      "id": 94,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "age"
          }
        }
      },
      "x": 673,
      "y": 489
    },
    {
      "id": 95,
      "shape": "tree-node",
      "width": 28,
      "height": 26,
      "leaf": true,
      "attrs": {
        "label": {
          "textWrap": {
            "text": 7
          }
        }
      },
      "x": 843,
      "y": 489
    },
    {
      "id": 96,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "name"
          }
        }
      },
      "x": 673,
      "y": 545
    },
    {
      "id": 97,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": true,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "Barbara"
          }
        }
      },
      "x": 843,
      "y": 545
    },
    {
      "id": 98,
      "shape": "tree-node",
      "width": 28,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "4"
          }
        }
      },
      "x": 503,
      "y": 629
    },
    {
      "id": 99,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "age"
          }
        }
      },
      "x": 673,
      "y": 601
    },
    {
      "id": 100,
      "shape": "tree-node",
      "width": 28,
      "height": 26,
      "leaf": true,
      "attrs": {
        "label": {
          "textWrap": {
            "text": 18
          }
        }
      },
      "x": 843,
      "y": 601
    },
    {
      "id": 101,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": false,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "name"
          }
        }
      },
      "x": 673,
      "y": 657
    },
    {
      "id": 102,
      "shape": "tree-node",
      "width": 70,
      "height": 26,
      "leaf": true,
      "attrs": {
        "label": {
          "textWrap": {
            "text": "Margaret"
          }
        }
      },
      "x": 843,
      "y": 657
    }
  ],
  "edges": [
    {
      "source": 69,
      "target": 70,
      "shape": "tree-edge"
    },
    {
      "source": 70,
      "target": 71,
      "shape": "tree-edge"
    },
    {
      "source": 71,
      "target": 72,
      "shape": "tree-edge"
    },
    {
      "source": 70,
      "target": 73,
      "shape": "tree-edge"
    },
    {
      "source": 73,
      "target": 74,
      "shape": "tree-edge"
    },
    {
      "source": 70,
      "target": 75,
      "shape": "tree-edge"
    },
    {
      "source": 75,
      "target": 76,
      "shape": "tree-edge"
    },
    {
      "source": 70,
      "target": 77,
      "shape": "tree-edge"
    },
    {
      "source": 77,
      "target": 78,
      "shape": "tree-edge"
    },
    {
      "source": 78,
      "target": 79,
      "shape": "tree-edge"
    },
    {
      "source": 79,
      "target": 80,
      "shape": "tree-edge"
    },
    {
      "source": 78,
      "target": 81,
      "shape": "tree-edge"
    },
    {
      "source": 81,
      "target": 82,
      "shape": "tree-edge"
    },
    {
      "source": 77,
      "target": 83,
      "shape": "tree-edge"
    },
    {
      "source": 83,
      "target": 84,
      "shape": "tree-edge"
    },
    {
      "source": 84,
      "target": 85,
      "shape": "tree-edge"
    },
    {
      "source": 83,
      "target": 86,
      "shape": "tree-edge"
    },
    {
      "source": 86,
      "target": 87,
      "shape": "tree-edge"
    },
    {
      "source": 77,
      "target": 88,
      "shape": "tree-edge"
    },
    {
      "source": 88,
      "target": 89,
      "shape": "tree-edge"
    },
    {
      "source": 89,
      "target": 90,
      "shape": "tree-edge"
    },
    {
      "source": 88,
      "target": 91,
      "shape": "tree-edge"
    },
    {
      "source": 91,
      "target": 92,
      "shape": "tree-edge"
    },
    {
      "source": 77,
      "target": 93,
      "shape": "tree-edge"
    },
    {
      "source": 93,
      "target": 94,
      "shape": "tree-edge"
    },
    {
      "source": 94,
      "target": 95,
      "shape": "tree-edge"
    },
    {
      "source": 93,
      "target": 96,
      "shape": "tree-edge"
    },
    {
      "source": 96,
      "target": 97,
      "shape": "tree-edge"
    },
    {
      "source": 77,
      "target": 98,
      "shape": "tree-edge"
    },
    {
      "source": 98,
      "target": 99,
      "shape": "tree-edge"
    },
    {
      "source": 99,
      "target": 100,
      "shape": "tree-edge"
    },
    {
      "source": 98,
      "target": 101,
      "shape": "tree-edge"
    },
    {
      "source": 101,
      "target": 102,
      "shape": "tree-edge"
    }
  ]
}
// 定义节点
class TreeNode extends Node {
  private collapsed: boolean = false

  protected postprocess() {
    this.toggleCollapse(false)
  }

  isCollapsed() {
    return this.collapsed
  }

  toggleButtonVisibility(visible: boolean) {
    this.attr('buttonGroup', {
      display: visible ? 'block' : 'none',
    })
  }

  toggleCollapse(collapsed?: boolean) {
    const target = collapsed == null ? !this.collapsed : collapsed
    if (!target) {
      this.attr('buttonSign', {
        d: 'M 1 5 9 5 M 5 1 5 9',
        strokeWidth: 1.6,
      })
    } else {
      this.attr('buttonSign', {
        d: 'M 2 5 8 5',
        strokeWidth: 1.8,
      })
    }
    this.collapsed = target
  }
}

TreeNode.config({
  zIndex: 2,
  markup: [
    {
      tagName: 'g',
      selector: 'buttonGroup',
      children: [
        {
          tagName: 'rect',
          selector: 'button',
          attrs: {
            'pointer-events': 'visiblePainted',
          },
        },
        {
          tagName: 'path',
          selector: 'buttonSign',
          attrs: {
            fill: 'none',
            'pointer-events': 'none',
          },
        },
      ],
    },
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'text',
      selector: 'label',
    },
  ],
  attrs: {
    body: {
      refWidth: '100%',
      refHeight: '100%',
      strokeWidth: 1,
      fill: '#EFF4FF',
      stroke: '#5F95FF',
    },
    label: {
      textWrap: {
        ellipsis: true,
        width: -10,
      },
      textAnchor: 'middle',
      textVerticalAnchor: 'middle',
      refX: '50%',
      refY: '50%',
      fontSize: 12,
    },
    buttonGroup: {
      refX: '100%',
      refY: '50%',
    },
    button: {
      fill: '#5F95FF',
      stroke: 'none',
      x: -10,
      y: -10,
      height: 20,
      width: 30,
      rx: 10,
      ry: 10,
      cursor: 'pointer',
      event: 'node:collapse',
    },
    buttonSign: {
      refX: 5,
      refY: -5,
      stroke: '#FFFFFF',
      strokeWidth: 1.6,
    },
  },
})

// 定义边
class TreeEdge extends Shape.Edge {
  isHidden() {
    const node = this.getTargetNode() as TreeNode
    return !node || !node.isVisible()
  }
}

TreeEdge.config({
  zIndex: 1,
  attrs: {
    line: {
      stroke: '#A2B1C3',
      strokeWidth: 1,
      targetMarker: null,
    },
  },
})
// 注册
Node.registry.register('tree-node', TreeNode, true)
Edge.registry.register('tree-edge', TreeEdge, true)
const graphRef = ref()
let graphInstance: Graph
onMounted(() => {
  graphInstance = new Graph({
    container: graphRef.value,
    panning: {
      enabled: true,
      eventTypes: ['leftMouseDown'],
    },
    mousewheel: {
      enabled: true,
      factor: 1.1,
      maxScale: 1.5,
      minScale: 0.5,
    },
    async: true,
    interacting: false,
    connecting: {
      anchor: 'orth',
      connector: 'rounded',
      connectionPoint: 'boundary',
      router: {
        name: 'er',
        args: {
          offset: 24,
          direction: 'H',
        },
      },
    },
  })
  graphInstance.on('node:collapse', ({ node }: { node: TreeNode }) => {
    node.toggleCollapse()
    const collapsed = node.isCollapsed()
    const run = (pre: TreeNode) => {
      const succ = graphInstance.getSuccessors(pre, { distance: 1 })
      if (succ) {
        succ.forEach((node: any) => {
          node.toggleVisible(!collapsed)
          if (!node.isCollapsed()) {
            run(node)
          }
        })
      }
    }
    run(node)
  })
  const start = new Date().getTime()
  const nodes = data.nodes.map(({ leaf, ...metadata }: any) => {
    const node = new TreeNode(metadata)
    if (leaf) {
      node.toggleButtonVisibility(leaf === false)
    }
    return node
  })
  const edges = data.edges.map(
    (edge: any) =>
      new TreeEdge({
        source: edge.source,
        target: edge.target,
      }),
  )
  graphInstance.resetCells([...nodes, ...edges])
  graphInstance.centerContent()
  graphInstance.zoom(-0.6)
})
</script>
 
<style scoped lang="less">
.team-manage {
  min-height: 600px;
  padding: 40px 30px;
  padding-bottom: 0px;

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

  .team-info-box {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: flex-start;

    .team-list {
      width: 50%;
      height: 590px;
      overflow: auto;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
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

      .info-list-table {
        flex: 1;
        margin-top: 20px;
      }
    }

    .team-palyer-info {
      width: 48%;
      min-height: 590px;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
      box-sizing: border-box;
      padding: 10px 0;

      .player-detail-info {
        .top-detail {
          display: flex;
          box-sizing: border-box;
          min-height: 220px;
          justify-content: space-between;
          border-bottom: 1px dashed #b2b266;
          .top-left-info {
            box-sizing: border-box;
            flex: 1;
            padding-left: 10px;

            .info-item {
              box-sizing: border-box;
              width: 100%;
              color: #969BA0;
              border-bottom: 1px dashed #999;
            }
          }

          .top-right-info {
            width: 65%;
            border-left: 1px dashed #999;
          }
        }

        .buttom-detail {
          box-sizing: border-box;
          padding: 10px;
          height: 315px;
          width: 100%;
        }
      }
    }
  }
}
</style>