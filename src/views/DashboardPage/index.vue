<template>
  <main class="dashboard-page">
    <!-- 左侧导航栏 -->
    <section class="dashboard-menu">
      <el-menu :collapse="isExpandMenu" default-active="/dashboard/DataOverview" class="left-menu" router>
        <template v-for="item, index in menuList" :key="index">
          <!-- 一级菜单 -->
          <el-menu-item :index="item.path" v-if="item.children === undefined">
            <!-- 动态生成图标 -->
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <template #title>
              <span>{{ item.name }}</span>
            </template>
          </el-menu-item>
          <!-- 多级菜单 -->
          <el-sub-menu :index="item.path" v-if="item.children !== undefined">
            <!-- 菜单标题 -->
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="childItem.path" v-for="childItem, childIndex in item.children">
              <template #title>
                <el-icon>
                  <component :is="childItem.icon"></component>
                </el-icon>
                <span>{{ childItem.name }}</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </section>
    <section class="content-box">
      <!-- 头部条 -->
      <section class="top-bar">
        <div class="left-title-box">
          <div class="change-size-icon" @click="isExpandMenu = !isExpandMenu">
            <el-icon :size="25" class="size-icon">
              <Fold v-if="!isExpandMenu" />
              <Expand v-if="isExpandMenu" />
            </el-icon>
          </div>
          <div class="size-title">
            篮球系统
          </div>
        </div>
        <div class="right-info-box">
          信息
        </div>
      </section>
      <!-- 右侧 -->
      <section class="right-box">
        <router-view></router-view>
      </section>
    </section>
  </main>
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue'
import { useStore } from '../../store'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Expand,
  Fold
} from '@element-plus/icons-vue'
const store = useStore()
const menuList = store.getMenuList
const isExpandMenu = ref<boolean>(false)
</script>

<style scoped lang="less">
.dashboard-page {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .dashboard-menu {
    height: 100%;
    overflow: auto;

    .left-menu {
      height: 100%;
      border-right: none;

      &:not(.el-menu--collapse) {
        width: 200px;
      }

      // :v-deep(.el-menu-item){
      //   margin-right: 5px;
      // }
      .menu-icon {
        width: 18px;
        height: 18px;
        margin-right: 5px;

      }
    }
  }

  .content-box {
    height: 100%;
    flex: 1;

    .top-bar {
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left-title-box {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .change-size-icon {
          &:hover {
            background: #F9F9F9;
            cursor: pointer;
          }

          position: static;
          padding: 10px;

          .size-icon {
            position: relative;
            top: 3px;
          }
        }

        .size-title {}
      }
    }

    .right-box {
      flex: 1;
      box-sizing: border-box;
      height: calc(100% - 60px);
      background: #F9F9F9;
    }
  }
}
</style>