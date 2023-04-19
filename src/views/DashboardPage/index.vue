<template>
  <main class="dashboard-page">
    <!-- 左侧导航栏 -->
    <section class="dashboard-menu">

    </section>
    <!-- 右侧 -->
    <section class="right-box"></section>
  </main>
</template>


<script lang='ts' setup>
import { ref, reactive } from 'vue'
import { useStore } from '../../store';
const store = useStore()
</script>
 
<style scoped lang="less">
.dashboard-page {
  height: 100vh;
  display: flex;

  .dashboard-menu {}

  .right-box {
    flex: 1;
  }
}
</style>