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

      </div>
      <!-- 右侧球员信息 -->
      <div class="team-palyer-info">

      </div>
    </div>
  </main>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'


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
      width: 40%;
      height: 590px;
      overflow: auto;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
    }

    .team-palyer-info {
      width: 58%;
      min-height: 590px;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .25);
    }
  }
}
</style>