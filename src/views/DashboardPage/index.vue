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
          <div class="seach-input-box">
            <el-input placeholder="搜索" />
          </div>
        </div>
        <div class="right-info-box">
          <div class="info-icon-box">
            <div class="info-item">
              <div class="info-message">
                10
              </div>
              <el-icon>
                <Bell />
              </el-icon>
            </div>
            <div class="info-item">
              <div class="info-message">
                10
              </div>
              <el-icon>
                <ChatDotSquare />
              </el-icon>
            </div>
            <div class="info-item">
              <div class="info-message is-3">
                10
              </div>
              <el-icon>
                <Setting />
              </el-icon>
            </div>
          </div>
          <div class="info-user-box">
            Hi,{{ store.username }}
            <div class="user-img">

            </div>
          </div>
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
  Fold,
  ChatDotSquare,
  Bell
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
        min-width: 40%;
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

        .seach-input-box {
          width: 100px;
          flex: 1;
          margin-left: 30px;
        }
      }

      .right-info-box {
        height: 100%;
        min-width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .info-icon-box {
          height: 100%;
          width: 50%;
          display: flex;
          justify-content: flex-end;
          align-items: center;

          .info-item {
            position: relative;
            cursor: pointer;
            width: 35px;
            height: 35px;
            border-radius: 10px;
            background-color: #E9ECFF;
            margin-right: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #2F4CDD;

            &:nth-child(3) {
              color: #FF6D4D;
              background-color: #FFEBE7;
            }

            &:hover {
              background-color: #2F4CDD;
              color: #E9ECFF;

              &:nth-child(3) {
                color: #FFEBE7;
                background-color: #FF6D4D;
              }
            }

            //消息通知
            .info-message {
              position: absolute;
              right: -7px;
              top: -4px;
              background: #2F4CDD;
              color: #fff;
              font-size: 10px;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              text-align: center;
              line-height: 20px;
            }

            .is-3 {
              background: #FF6D4D;
            }
          }
        }

        .info-user-box {
          display: flex;
          align-items: center;
          position: relative;
          margin-right: 30px;
          padding-left: 20px;
          width: 100px;
          height: 60%;
          color: #fff;
          background-color: #2F4CDD;
          border-radius: 10px;

          .user-img {
            background: rgb(200, 10, 10);
            top: 50%;
            transform: translateY(-50%);
            right: -10px;
            position: absolute;
            height: 35px;
            width: 35px;
            border-radius: 50%;
            border: 3px solid #fff;
          }
        }
      }
    }

    .right-box {
      height: calc(100% - 60px);
      overflow: auto;
      flex: 1;
      box-sizing: border-box;
      background: #F9F9F9;
    }
  }
}
</style>