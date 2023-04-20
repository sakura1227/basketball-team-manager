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
      <div class="date-card" v-for="i in 4">
        <div class="card-left-icon">

        </div>
        <div class="card-right-info">

        </div>
      </div>
    </div>
    <!-- 图表组 -->
    <div class="chart-group">
      <div class="chat-item" v-for="i in 2">

      </div>
    </div>
    <!-- 底部图 -->
    <div class="buttom-chat-group">
      <div class="bar-chat">

      </div>
      <div class="more-info-card">

      </div>
    </div>
  </main>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'


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

    .date-card {
      width: 280px;
      height: 150px;
      background-color: #fff;
      border-radius: 5%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .25);

      .card-left-icon {
        height: 50px;
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
      box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
    }
  }

  .buttom-chat-group {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;

    .bar-chat {
      width: 70%;
      min-height: 300px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
    }

    .more-info-card {
      width: 28%;
      min-height: 300px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
    }

  }
}
</style>