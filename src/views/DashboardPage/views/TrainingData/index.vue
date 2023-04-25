<template>
  <main class="train-data">
    <!-- 文字说明 -->
    <section class="title-info">
      <div class="left-info">
        <p class="info-title">
          训练数据
        </p>
        <p class="info-p">
          查看训练数据
        </p>
      </div>

      <div class="right-filter">
        <div>
        </div>
      </div>
    </section>
    <!-- 图表 -->
    <div class="train-data-box">
      <!-- 标题选择器 -->
      <div class="title-info">
        <div class="left-info">
          <p class="info-title">
            训练数据
          </p>
          <p class="info-p">
            选择不同的维度以查看训练数据
          </p>
        </div>
        <div class="right-filter">
          <div class="filter-wrap">
            <div class="filter-item filter-item-active">
              全部训练
            </div>
            <div class="filter-item">
              体能训练
            </div>
            <div class="filter-item">
              专项训练
            </div>
            <div class="filter-item">
              训练赛
            </div>
          </div>
        </div>
      </div>
      <!-- 数据表 -->
      <div class="data-table">
        <el-table :data="tableData" style="width: 100%" height="440">
          <el-table-column fixed prop="date" label="Date" width="150" />
          <el-table-column prop="name" label="Name" width="120" />
          <el-table-column prop="state" label="State" width="120" />
          <el-table-column prop="city" label="City" width="320" />
          <el-table-column prop="address" label="Address" width="300" />
          <el-table-column prop="zip" label="Zip" width="120" />
        </el-table>
      </div>
    </div>
  </main>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]

</script>
 
<style scoped lang="less">
.train-data {
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

  .train-data-box {
    margin-top: 30px;
    width: 100%;
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
            width: 75px;
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

    .data-table {
      box-sizing: border-box;
      margin-top: 10px;
      height: 440px;
    }
  }
}
</style>