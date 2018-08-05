<template>
<div>
  <p><span @click="change">{{ shape }}</span>保全操作轨迹</p>
  <div class="infoTable" v-show="isShow">
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        label="序号"
        prop=""
        align="center" header-align="center"
        width="55">
      </el-table-column>
      <el-table-column
        label="操作岗位"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="操作员"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="任务流转时间"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="任务申请时间"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="处理完成时间"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
    </el-table>
      <el-button type="primary" class="footer_btn">返回</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'operateRoute',
  data() {
    return {
      isShow: true,
      shape: '-'
    }
  },
  methods: {
    change() {
      this.isShow = !this.isShow
      if (this.isShow) {
        this.shape = '+'
      } else {
        this.shape = '-'
      }
    }
  }
}
</script>

<style scoped>
  p {
    font-size: 16px;
    color: blue;
    border-bottom: 2px solid blue;
    margin: 15px;
    line-height: 30px;
  }
  p span {
    display: inline-block;
    width: 15px;
    height: 15px;
    font-size: 14px;
    line-height: 13px;
    text-align: center;
    border: 1px solid #ccc;
    margin: 5px;
  }
  .footer_btn {
    margin: 20px;
  }
</style>
