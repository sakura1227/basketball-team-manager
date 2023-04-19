<template>
  <main class="login-page">
    <!-- 登录盒子 -->
    <section class="login-form-box">
      <!-- 左侧图片 -->
      <div class="left-img-box">
        <!-- 头部说明文字 -->
        <div class="img-title">
          Hi,你好!
          <br>
          欢迎进入篮球管理系统
        </div>
        <img class="left-img" src="./image/left-img.svg" alt="">
      </div>
      <!-- 右侧表单 -->
      <div class="right-form-box">
        <!-- 标题 -->
        <div class="login-title">登录系统</div>
        <!-- form box -->
        <el-form :model="loginData" ref="ruleFormRef" :rules="loginRules" label-width="120px" label-position="top">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginData.username" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginData.password" />
          </el-form-item>
          <el-form-item class="remeber-box">
            <el-switch v-model="loginData.savePassword" />
            <span class="remember-password">记住密码</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" color="#006eee" @click="submitForm(ruleFormRef)">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </main>
</template>


<script lang='ts' setup>
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useStore } from '../../store'
import { useRouter } from 'vue-router';
const store = useStore()
const router = useRouter()
const loginData = reactive({
  username: "",
  password: "",
  savePassword: false,
})
const ruleFormRef = ref<FormInstance>()
const loginRules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '用户名长度在3到10之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 10, message: '密码长度在3-10之间', trigger: 'blur' },
  ]
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      store.username = loginData.username
      store.password = loginData.password
      store.savePassword = loginData.savePassword
      // 进入仪表盘
      router.push("/dashboard")
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
 
<style scoped lang="less">
.login-page {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background: url("./image/bg.png");
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form-box {
    min-height: 65%;
    min-width: 80%;
    border-radius: 30px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    background: none;

    .left-img-box {
      flex: 1;
      background-color: rgba(0, 110, 238, 1);
      border-radius: 30px 0 0 30px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;

      .img-title {
        flex: 1;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        letter-spacing: 8px;
      }

      .left-img {
        height: 65%;
        width: 100%;
        object-fit: contain;
        margin-bottom: 10px;
      }
    }

    .right-form-box {
      color: #fff;
      box-sizing: border-box;
      padding: 10px 60px;
      width: 40%;
      border-radius: 0 30px 30px 0;
      background-color: #55b5f9;

      .login-title {
        font-size: 25px;
        padding: 50px 0 30px 0;
      }

      :deep(.remeber-box) {
        margin: 20px 0 60px 0;
      }

      :deep(.el-form-item) {
        .el-form-item__label {
          color: #fff;
        }

        .remember-password {
          margin-left: 5px;
        }

        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>