<template>
<div class="main">
  <p><span @click="change1">{{ shape1 }}</span>操作履历信息</p>
  <div class="infoTable1" v-show="isShow1">
    <el-table
      :data="tableData1"
      style="width: 100%"
    >
      <el-table-column
        label="序号"
        prop=""
        align="center" header-align="center"
        width="55">
      </el-table-column>
      <el-table-column
        label="投保单号码"
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
        label="操作开始日期"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="操作结束日期"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="操作后状态"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="上报类型"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="备注"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
    </el-table>
    <el-row class="tableFooter1">
      <el-button type="primary" class="footer_btn">首页</el-button>
      <el-button type="primary" class="footer_btn">上一页</el-button>
      <el-button type="primary" class="footer_btn">下一页</el-button>
      <el-button type="primary" class="footer_btn">尾页</el-button>
    </el-row>
  </div>

  <p><span @click="change2">{{ shape2 }}</span>银行转账信息</p>
  <div class="infoTable1" v-show="isShow2">
    <el-table
      :data="tableData2"
      style="width: 100%"
    >
      <el-table-column
        label="序号"
        prop=""
        align="center" header-align="center"
        width="55">
      </el-table-column>
      <el-table-column
        label="收据号/划款协议书号"
        prop=""
        align="center" header-align="center"
        width="150">
      </el-table-column>
      <el-table-column
        label="投保单号"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="抽盘日期"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="回盘日期"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="状态"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
    </el-table>
  </div>

  <p><span @click="change3">{{ shape3 }}</span>现金收费信息</p>
  <div class="infoTable3" v-show="isShow3">
    <el-table
      :data="tableData3"
      style="width: 100%"
    >
      <el-table-column
        label="序号"
        prop=""
        align="center" header-align="center"
        width="55">
      </el-table-column>
      <el-table-column
        label="收据号/划款协议书号"
        prop=""
        align="center" header-align="center"
        width="150">
      </el-table-column>
      <el-table-column
        label="投保单号"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="交费时间"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
      <el-table-column
        label="状态"
        prop=""
        align="center" header-align="center"
        width="120">
      </el-table-column>
    </el-table>
    <el-row class="tableFooter3">
      <el-button type="primary" class="footer_btn" @click="toManualUnderwriting()">返回</el-button>
    </el-row>
  </div>

</div>
</template>

<script>
export default {
  name: 'operationHistoryQuery',
  data() {
    return {
      isShow1: true,
      isShow2: true,
      isShow3: true,
      shape1: '-',
      shape2: '-',
      shape3: '-',
      tableData: [
        {}
      ]
    }
  },
  methods: {
    change1() {
      this.isShow1 = !this.isShow1
      if (this.isShow1) {
        this.shape1 = '+'
      } else {
        this.shape1 = '-'
      }
    },
    change2() {
      this.isShow2 = !this.isShow2
      if (this.isShow2) {
        this.shape2 = '+'
      } else {
        this.shape2 = '-'
      }
    },
    change3() {
      this.isShow3 = !this.isShow3
      if (this.isShow3) {
        this.shape3 = '+'
      } else {
        this.shape3 = '-'
      }
    },
    toManualUnderwriting() {
      alert('hhhhh')
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
  .tableFooter1 {
    margin-left: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .footer_btn {
    margin-left: 20px;
  }
</style>
