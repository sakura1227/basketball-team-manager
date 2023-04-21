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
          <div class="chat-item-left-chat">
          </div>
          <!-- 右侧柱状图 -->
          <div class="chat-item-right-chat">
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
        <div class="chat-item-box-2">

        </div>
      </div>
    </div>
    <!-- 底部图 -->
    <div class="buttom-chat-group">
      <div class="bar-chat">
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
        <div class="chat-item-box">
        </div>
      </div>
      <div class="more-info-card">
        <div class="more-info-box">

        </div>
      </div>
    </div>
  </main>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'
import {
  User, Histogram, List, Flag, ArrowDown
} from '@element-plus/icons-vue'
//左上角饼图和柱状图


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
          border: 1px solid red;
          height: 175px;
          width: 40%;
        }

        .chat-item-right-chat {
          border: 1px solid rgb(61, 33, 187);
          height: 175px;
          width: 60%;
        }
      }

      .chat-item-box-2 {
        margin-top: 20px;
        box-sizing: border-box;
        border: 1px solid red;
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
        border: 1px solid red;
        height: 270px;
        width: 100%;
      }
    }

    .more-info-card {
      width: 28%;
      padding: 40px 30px;
      padding-bottom: 30px;
      min-height: 410px;
      .more-info-box {
        margin-top: 20px;
        box-sizing: border-box;
        border: 1px solid red;
        height: 320px;
        width: 100%;
      }
    }

  }
}
</style>