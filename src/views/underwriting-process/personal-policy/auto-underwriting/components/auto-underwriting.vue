<template>
  <div class="main">
      <p>请输入查询条件:</p>
      <div class="container">
      <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-ruleForm" label-position="right">
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item  label="投保单号码" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="管理机构" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg">
          <el-col :span="6">
            <el-form-item  label="代理人组别" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item  label="代理人编码" :required="false" prop="" size="small">
              <el-input style=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-button type="primary" class="check_btn">查询</el-button>
    </div>
    <p><span @click="change">{{ shape }}</span>保单信息</p>
    <div class="table" v-show="isShow">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          label="投保单号码"
          width="120">
        </el-table-column>
        <el-table-column
          label="投保人"
          width="120">
        </el-table-column>
        <el-table-column
          label="代理人"
          width="120">
        </el-table-column>
        <el-table-column
          label="管理机构"
          width="120">
        </el-table-column>
        <el-table-column
          label="初审日期"
          width="120">
        </el-table-column>
        <el-table-column
          label="扫描日期"
          width="120">
        </el-table-column>
        <el-table-column
          label="自核日期"
          width="120">
        </el-table-column>
        <el-table-column
          label="初审经过天数"
          width="120">
        </el-table-column>
      </el-table>
      <el-row class="footer1">
        <el-button type="primary" class="footer_btn">首页</el-button>
        <el-button type="primary" class="footer_btn">上一页</el-button>
        <el-button type="primary" class="footer_btn">下一页</el-button>
        <el-button type="primary" class="footer_btn">尾页</el-button>
      </el-row>
      <el-button type="primary" class="footer2">自动核保</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'autoUnderwriting',
  data() {
    return {
      isShow: true,
      shape: '-',
      tableData: [
        {}
      ]
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
  .table {
    margin-left: 20px;
  }
  .check_btn {
    margin-left: 20px;
  }
  .footer1 {
    margin: 20px;
  }
  .footer2 {
    margin-left: 20px;
  }
</style>
